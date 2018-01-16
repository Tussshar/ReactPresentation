export var changeDirection = (direction, value) => {
  return {
    type: 'CHANGE_DIRECTION',
    direction,
    value
  }
};

export var addTitle = () => {
  return {
    type: 'ADD_TITLE',
    title: 'React Presentation',
  }
};

export var addSlide = (heading, hasLeft, hasRight, pages) => {
  return {
    type: 'ADD_SLIDE',
    heading,
    hasLeft,
    hasRight,
    pages
  }
};

export var updateSlide = (slide) => {
  return {
    type: 'UPDATE_CURRENT_SLIDE',
    slide
  }
};

export var updateCurrentPage = (currentPage) => {
  return {
    type: 'UPDATE_CURRENT_PAGE',
    currentPage
  }
};
