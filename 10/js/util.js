const getRandomInt = (start, end) => {
  if (start >= end) {
    throw new Error('The "start" value must be less than the "end" value.');
  } else if (start < 0 || end < 0) {
    throw new Error('A range with negative numbers is not allowed.');
  } else {
    const min = Math.ceil(start);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getRandomObject = (objects) => objects[getRandomInt(0, objects.length - 1)];

const isEscape = (evt) => evt.key === 'Escape';

export { getRandomInt, getRandomObject, isEscape };
