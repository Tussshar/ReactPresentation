var React = require('react');
var {connect} = require('react-redux');

export var Points = React.createClass({
  render: function () {

    var renderPoints = () => {
      var {currentPage, currentSlide} = this.props;
      let buffer = [];
      var animate = true;

      if(currentPage.pageNumber !== undefined) {
        currentPage.points.map(function(data){
          if(data.id !== "iframe"){
            buffer.push(<p key={data.id}>{data.value}</p>);
          } else {

          }

        });
      }

      if(buffer.length === 0 && currentSlide.slideId == 3 &&
      currentPage.pageNumber == 1) {
        return (
          <div>
            <iframe src="https://giphy.com/embed/12F9XtxH3uVXWg" alt="#WaitForIt" width="480"
              height="254" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>);
      }

      return (
        <div className="points">

          {buffer}
        </div>
      );
    };

    return (
      renderPoints()
    );
  }
});

export default connect(
  (state) => {
    return {
      currentPage: state.currentPage,
      currentSlide: state.currentSlide
    }
  }
)(Points);
