var React = require('react');

var actions = require('actions');
var store = require('configureStore').configure();

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

store.dispatch(actions.addSlide('ReactSlide 1', pages1));
store.dispatch(actions.addSlide('ReactSlide 2', pages2));
store.dispatch(actions.addSlide('ReactSlide 3', pages3));

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
var currentPage = {};

store.dispatch(actions.updateSlide(currentSlide));
store.dispatch(actions.updateCurrentPage(currentPage));
