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

var pages1 = [
  {
  }
];

store.dispatch(actions.addSlide('ReactJS Presentation', pages1));

var pages2 = [
  {
    pageNumber: '1',
    heading: 'What is React.js',
    points: [
      {id:'It was developed by Facebook', value:'It was developed by Facebook'},
      {id:'It is a view in MVC', value:'Its is a view in MVC'},
      {id:'It is a javascript library', value:'It is a javascript library'}]
  }
];

store.dispatch(actions.addSlide('What is ReactJS', pages2));

var pages3 = [
  {
    pageNumber: '1',
    heading: 'Virtual DOM',
    points: [
      {id:'point1', value:'Javascript(JSON) object that is a representation of the browser DOM'},
      {id:'point2', value:'Extremely fast compared to the browser DOM'},
      {id:'point3', value:'Can produce 200,000 virtual DOM nodes a second'},
      {id:'point4', value: 'Created completely from scratch on every setState or dispatch'},
      {id:'point5', value: 'Has 2 virtual trees (new and previous)'}
    ]
  },
  {
    pageNumber: '2',
    heading: 'Diffing Algorithm',

    points:[{id: 'point1', value: 'Uses 2 virtual trees (new and previous) to find differences and batch update real DOM'}]
  },
  {
    pageNumber: '3',
    heading: 'Browser DOM update',
    points: [
      {id:'point1', value:'React creates the new virtual DOM, diffs it with the '+
        'old one and creates a list of minimal possible changes to the browser DOM'},
        {id:'point2', value:'Once it completes the list it will fire of all the '+
        'changes in rapid succession'},
        {id:'point3', value:'Whenever possible, does not update entire component '+
          'in real DOM - only computes a patch operation that updates part of it'}
    ]
  }
];
store.dispatch(actions.addSlide('How does React.js works Internally', pages3));

var pages4 = [
  {
    pageNumber: '1',
    heading: 'Easy to understand what a component will render',
    points: [
      {id:'point1', value:'Declarative code → predictable code'},
      {id:'point2', value:'You don\'t really need to study JS in the view file in order to understand what the file does'}
    ]
  },
  {
    pageNumber: '2',
    heading: 'Easy to mix HTML and JS',
    points: [

    ]
  },
  {
    pageNumber: '3',
    heading: 'No complex two-way data flow',
    points: [
      {id:'point1', value:'Uses simple one-way reactive data flow'},
      {id:'point2', value:'Easier to understand than two-way binding'},
      {id:'point3', value:'Uses less code'}
    ]
  },
  {
    pageNumber: '4',
    heading: 'React is fast',
    points: [
      {id:'point1', value:'Real DOM is slow'},
      {id:'point2', value:'JavaScript is fast'},
      {id:'point3', value: 'Using virtual DOM objects enables fast batch updates to real DOM'}
    ]
  },
  {
    pageNumber: '5',
    heading: 'React dev tools',
    points: [
      {id:'point1', value:'React Chrome extension makes debugging  so much easier'}
    ]
  },
  {
    pageNumber: '6',
    heading: 'Server-side rendering',
    points: [
      {id:'point1', value:'you can render React on the server-side'}
    ]
  }
];

store.dispatch(actions.addSlide('React: the good', pages4));

var pages5 = [
  {
    pageNumber: '1',
    heading: 'React is nothing but the view',
    points: [
      {id:'point1', value:'No events (other than vanilla DOM events)'},
      {id:'point2', value:'No AJAX capabilities whatsoever'},
      {id:'point4', value:'No data/ models'},
      {id:'point5', value:'No promises'},
      {id:'point6', value:'No framework'}
    ]
  },
  {
    pageNumber: '2',
    heading: 'Very little info in the docs',
    points: [
      {id:'point1', value:'But its not hard to learn'},
    ]
  },
  {
    pageNumber: '3',
    heading: 'Architectural annoyances',
    points: [
      {id:'point1', value:'Cannot set state on unmounted components'}
    ]
  },
  {
    pageNumber: '4',
    heading: 'React on its own not enough for most real world use cases',
    points: [
      {id:'point1', value:'This "bad" is actually a "good" in disguise'}
    ]
  },
  {
    pageNumber: '5',
    heading: 'No support for older browsers',
    points: [
      {id:'point1', value:'React won\'t work with IE8'}
    ]
  }
];
store.dispatch(actions.addSlide('React: the bad', pages5));

var pages6 = [
  {
    pageNumber: '1',
    heading: 'Is switching to React easy?',
    points: [
      {id:'point1', value:'Understanding how it works will take time and will '+
        'slow you down at first (but once you get it, things will start happening much faster)'}
    ]
  }
];

store.dispatch(actions.addSlide('Is switching to React easy?', pages6));

var pages7 = [
  {
  }
];

store.dispatch(actions.addSlide('Fundamentals', pages7));

var pages8 = [
  {
    pageNumber: '1',
    heading: 'Component',
    points: [
      {id:'point1', value:'Components are self-contained reusable building '+
        'blocks of web application'},
      {id:'point2', value:'React components are basically just pure functions '+
        '(same input produces same output)'},
      ]
  },
  {
    pageNumber: '2',
    heading: 'Component',
    points: [
      {id:'point1', value:'Created using React.createClass()'},
      {id:'point2', value:'The only required method is render()'},
      {id:'point3', value:'Inserted into DOM using ReactDOM.render()'}
      ]
  }
];

store.dispatch(actions.addSlide('Component', pages8));

var pages9 = [
  {
    pageNumber: '1',
    heading: 'Props',
    points: [
      {id:'point1', value:'Passed down to component from parent component and '+
        'represents data for the component'},
      {id:'point2', value:'accessed via this.props'}
    ]
  }
];
store.dispatch(actions.addSlide('Props', pages9));

var pages10 = [
  {
    pageNumber: '1',
    heading: 'State',
    points: [
      {id:'point1', value:'Represents internal state of the component'},
      {id:'point2', value:'Accessed via this.state'},
      {id:'point3', value:'When a component\'s state data changes, the rendered'
        +' markup will be updated by re-invoking render() method'}]
  }
];

store.dispatch(actions.addSlide('State', pages10));

var pages7 = [
  {
    pageNumber: '1',
    heading: 'What is React.js',
    points: [
      {id:'point1', value:'It was developed by Facebook'},
      {id:'point2', value:'Its is a view in MVC'},
      {id:'point3', value:'It is a javascript library'}]
  }
];
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

$(document).foundation();

ReactDOM.render(
  /*
    Inside provider we can put any component which we would like to have access
    to our store.
    So here Presentation component as well as all of its children would be able to
    access data on the store and also dispatch actions
  */
  /*
    So now Presentaion component as well as all of its children will have access
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
