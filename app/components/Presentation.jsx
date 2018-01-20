import React from 'react';
import * as Redux from 'react-redux';


//import store from 'configureStore'.configure();
var store = require('configureStore').configure();

import Title from 'Title';
import Points from 'Points';
import Directions from 'Directions';

export var Presentation = React.createClass({
  render(){

    var {title} = this.props;

    return (
      <div className="row">
        <div className="column small-centered small-11 medium-10 large-10">
          <div className="container">
            <Title/>
            <Points/>
            <Directions/>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect(
  (state) => {
    return {
      title: state.title
    }
  }
)(Presentation);
