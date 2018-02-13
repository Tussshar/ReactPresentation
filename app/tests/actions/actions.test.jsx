import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate Add Title action', () => {
    var action = {
      type: 'ADD_TITLE',
      title: 'React Presentation',
    };

    var res = actions.addTitle();

    expect(res).toEqual(action);
  });

  it('should generate Add Slide action', () => {

    var pages = [
      {
        pageNumber: '1',
        heading: 'What is React.js',
        points: [
          {id:'It was developed by Facebook', value:'It was developed by Facebook'},
          {id:'It is a view in MVC', value:'Its is a view in MVC'},
          {id:'It is a javascript library', value:'It is a javascript library'}]
      }
    ];

    var action = {
      type: 'ADD_SLIDE',
      heading: 'ReactJS Presentation',
      pages: pages
    };

    var res = actions.addSlide('ReactJS Presentation', pages);

    expect(res).toEqual(action);
  });

  it('should generate Update Slide action', () => {

    var action = {
      type: 'UPDATE_CURRENT_SLIDE',
      slide: 3
    };

    var res = actions.updateSlide(3);

    expect(res).toEqual(action);
  });

  it('should generate Update Current Page action', () => {

    var currentPage = {
      pageNumber: '2',
      heading: 'Virtual DOM',
      points: [
        {id:'point1', value:'Javascript(JSON) object that is a representation of the browser DOM'},
        {id:'point2', value:'Extremely fast compared to the browser DOM'},
        {id:'point3', value:'Can produce 200,000 virtual DOM nodes a second'},
        {id:'point4', value: 'Created completely from scratch on every setState or dispatch'},
        {id:'point5', value: 'Has 2 virtual trees (new and previous)'}
      ]
    };

    var action = {
      type: 'UPDATE_CURRENT_PAGE',
      currentPage: currentPage
    };

    var res = actions.updateCurrentPage(currentPage);

    expect(res).toEqual(action);
  });
});
