var React = require('react');
var {connect} = require('react-redux');

export var Directions = React.createClass({
  render: function () {
    return (
      <div>
        Directions Component
      </div>
    );
  }
});

export default connect()(Directions);
