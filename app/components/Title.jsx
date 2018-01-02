var React = require('react');
var {connect} = require('react-redux');

export var Title = React.createClass({
  render: function () {
    return (
      <div>
        <label>Title Component</label>
      </div>
    );
  }
});

export default connect()(Title);
