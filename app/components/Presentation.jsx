import React from 'react';
import * as Redux from 'react-redux';

import Title from 'Title';
import Points from 'Points';
import Directions from 'Directions';

export var Presentation = React.createClass({
  render(){
    return (
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
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

export default Redux.connect()(Presentation);
