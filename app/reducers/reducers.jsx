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
