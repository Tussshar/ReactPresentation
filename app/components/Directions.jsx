var React = require('react');
var {connect} = require('react-redux');

export var Directions = React.createClass({
  render: function () {
    return (
      <div className="directions">
        <ul>
          <li className="arrow top"></li>
          <li className="arrow left"></li>
          <li className="arrow right"></li>
          <li className="arrow down"></li>
        </ul>
      </div>
    );
  }
});

export default connect()(Directions);
