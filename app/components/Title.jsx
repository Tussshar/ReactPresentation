var React = require('react');
var {connect} = require('react-redux');

export var Title = React.createClass({
  render: function () {

    var renderTitle = () => {

      var {currentSlide, currentPage} = this.props;
      var title = "";
      var titleClass = "";

      if(currentPage.heading === undefined) {
        title = currentSlide.heading;
        titleClass="slideTitle";
      } else {
        title = currentPage.heading;
        titleClass = "pageTitle";
      }
      return (
        <h1 className={titleClass}>{title}</h1>
      );
    };



    return (
      <div className="heading">
        {renderTitle()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      currentSlide: state.currentSlide,
      currentPage: state.currentPage
    }
  }
)(Title);
