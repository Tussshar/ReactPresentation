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

store.dispatch(actions.addTitle());

var pages1 = [
  {
    pageNumber: '1',
    heading: 'slide1SubHeading1',
    points: [{id:'point1', value:'point1'}, {id:'point2', value:'point2'}, {id:'point3', value:'point3'}]
  },
  {
    pageNumber: '2',
    heading: 'slide1SubHeading2',
    points:[{id:'point1', value:'point1'}, {id:'point2', value:'point2'}, {id:'point3', value:'point3'}]
  }
];

var pages2 = [
  {
    pageNumber: '1',
    heading: 'slide2SubHeading1',
    points: [{id:'point1', value:'point1'}, {id:'point2', value:'point2'}, {id:'point3', value:'point3'}]
  },
  {
    pageNumber: '2',
    heading: 'slide2SubHeading2',
    points:[{id:'point1', value:'point1'}, {id:'point2', value:'point2'}, {id:'point3', value:'point3'}]
  }
];

var pages3 = [
  {
    pageNumber: '1',
    heading: 'slide3SubHeading1',
    points: [{id:'point1', value:'point1'}, {id:'point2', value:'point2'}, {id:'point3', value:'point3'}]
  },
  {
    pageNumber: '2',
    heading: 'slide3SubHeading2',
    points:[{id:'point1', value:'point1'}, {id:'point2', value:'point2'}, {id:'point3', value:'point3'}]
  }
];

store.dispatch(actions.addSlide('ReactSlide 1', false, true, pages1));
store.dispatch(actions.addSlide('ReactSlide 2', true, true, pages2));
store.dispatch(actions.addSlide('ReactSlide 3', true, false, pages3));

var state = store.getState();
/*
console.log(state.currentPage);
console.log(state.currentPage.heading);

if(state.currentPage.heading === undefined) {
  console.log("true");
}else {
  console.log("False");
}
*/

var currentSlide = state.slides[0];
var currentPage = currentSlide.pages[0];

store.dispatch(actions.updateSlide(currentSlide));
store.dispatch(actions.updateCurrentPage(currentPage));

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
