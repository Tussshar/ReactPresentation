export var changeDirection = (direction, value) => {
  return {
    type: 'CHANGE_DIRECTION',
    direction,
    value
  }
};
