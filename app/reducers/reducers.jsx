export var directionsReducer = (state = [], action) => {
  switch(action.type) {
    case 'CHANGE_DIRECTION':
      return {
        ...state,
        hasRight: true
      };
    default:
      return state;
  }
};

export var titleReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'ADD_TITLE':
      return action.title
    default:
      return state;
  }
};

var slideId =  1;
export var slidesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SLIDE':
      return [
        ...state,
        {
          slideId: slideId++,
          heading: action.heading,
          hasLeft: action.hasLeft,
          hasRight: action.hasRight,
          pages: action.pages
        }
      ];
    default:
      return state;
  }
};

export var currentSlideReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_CURRENT_SLIDE':
      return action.slide;
    default:
        return state;
  }
};

export var currentPageReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_CURRENT_PAGE':
      return action.currentPage;
    default:
      return state;
  }
}
