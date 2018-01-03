var React = require('react');
var {connect} = require('react-redux');

export var Points = React.createClass({
  render: function () {
    return (
      <div className="points">
        <p>Points Component</p>
        <p>Points Component</p>
        <p>Points Component</p>
        <p>Points Component</p>
      </div>
    );
  }
});

export default connect()(Points);
