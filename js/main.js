// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandom (start, end) {
  if (start >= end) {
    throw new Error('The "start" value must be less than the "end" value.');
  } else if (start < 0 || end < 0) {
    throw new Error('A range with negative numbers is not allowed.');
  } else {
    const min = Math.ceil(start);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandom(0, 100);

// Функция для проверки максимальной длины строки
function checkStringLength (testLine, maxLength) {
  return testLine.length < maxLength;
}

checkStringLength('Goodbye world!', 15);
