var React = require('react');
var {connect} = require('react-redux');

export var Directions = React.createClass({
  render: function () {

    var handleClick = (key, e) => {

      console.log("clicked: " + key);
      var {slides, currentSlide, currentPage} = this.props;

      if(key === "left"){
        currentSlide = slides[currentSlide.slideId - 2];
        currentPage = {};


      } else if(key === "right") {
        currentSlide = slides[currentSlide.slideId];
        currentPage = {};

      } else if(key === "top") {
        if(currentPage.pageNumber === currentSlide.pages[0].pageNumber) {
          currentPage = {};
        } else {
          currentPage = currentSlide.pages[currentPage.pageNumber  -2];
        }

      }else {
        if(currentPage.pageNumber === undefined) {
          currentPage = currentSlide.pages[0];
        } else {
          currentPage = currentSlide.pages[currentPage.pageNumber];
        }
      }
    };

    var renderNavigation = () => {

      var {slides, currentSlide, currentPage} = this.props;
      let buffer = [];

      if(currentPage.heading !== undefined) {
        buffer.push(<li className="arrow top" key="topArrow" onClick={() => handleClick("left")}></li>);
      }

      if(currentSlide.slideId !== slides[0].slideId) {
        console.log("True")
        buffer.push(<li className="arrow left" key="leftArrow" onClick={() => handleClick("left")}></li>);
      }

      if(currentSlide.slideId !== slides[slides.length - 1].slideId) {
        buffer.push(<li className="arrow right" key="rightArrow" onClick={() => handleClick("right")}></li>);
      }

      if(currentPage.pageNumber !== currentSlide.pages[currentSlide.pages.length - 1].pageNumber) {
        buffer.push(<li className="arrow down" key="downArrow" onClick={() => handleClick("down")}></li>);
      }

      return (
        <ul>
          {buffer}
        </ul>
      );
    };

    return (
      <div className="directions">
        {renderNavigation()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      slides: state.slides,
      currentSlide: state.currentSlide,
      currentPage: state.currentPage
    }
  }
)(Directions);
