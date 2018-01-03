var React = require('react');
var {connect} = require('react-redux');

export var Title = React.createClass({
  render: function () {
    return (
      <div className="heading">
        <h1>Title Component</h1>
      </div>
    );
  }
});

export default connect()(Title);
