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

const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
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

export { getRandomInt, getRandomObject, isEscape, debounce, getRandomElements };
