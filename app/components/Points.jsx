var React = require('react');
var {connect} = require('react-redux');

export var Points = React.createClass({
  render: function () {
    return (
      <div>
        Points Component
      </div>
    );
  }
});

export default connect()(Points);
