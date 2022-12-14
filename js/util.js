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

const isEscape = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getRandomElements = (array, count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const randomElement = array[getRandomInt(0, array.length - 1)];
    result.push(randomElement);
    array.splice(array.indexOf(randomElement), 1);
  }
  return result;
};

export { getRandomInt, isEscape, debounce, getRandomElements };
