var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
/*
  Provider lets you provide store to its children
  So the conponent like todoList, even though  they are rendered two components
  deep, can still access attribute on store and use them to render
*/

//Syntax in ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/*
  The above line creates a variable named Route, Router
  and gets its value using require
*/
/*
Code in ES5

var Route = require('react-router').Route;
Similar thing we would have to do for other variables as well
*/

var actions = require('actions');
var store = require('configureStore').configure();
import Presentation from 'Presentation';


//App css
require('style!css!sass!applicationStyles')

store.dispatch(actions.changeDirection('Right', true));

$(document).foundation();

ReactDOM.render(
  /*
    Inside provider we can put any component which we would like to have access
    to our store.
    So here TodoApp component as well as all of its children would be able to
    access data on the store and also dispatch actions
  */
  /*
    So now TodoApp component as well as all of its children will have access
    to data on store as well as dispaych action
  */
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Presentation}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
