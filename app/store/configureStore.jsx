import * as redux from 'redux';
import thunk from 'redux-thunk';

import {titleReducer, slidesReducer, currentSlideReducer,
  currentPageReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    title: titleReducer,
    slides: slidesReducer,
    currentSlide: currentSlideReducer,
    currentPage: currentPageReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
