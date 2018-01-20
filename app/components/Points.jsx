var React = require('react');
var {connect} = require('react-redux');

export var Points = React.createClass({
  render: function () {
    
    var renderPoints = () => {
      var {currentPage} = this.props;
      let buffer = [];

      if(currentPage !== undefined) {
        currentPage.points.map(function(data){
          buffer.push(<p key={data.id}>{data.value}</p>);
        });
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
      currentPage: state.currentPage
    }
  }
)(Points);
