import {getRandomInt, getRandomObject} from './util.js';

const DESCRIPTIONS = [
  'Awesome',
  'Very good',
  'Nice',
  'Beautiful',
  'Piece of art',
  'Normally',
  'Badly',
  'Terrible',
  'Disgusting'
];

const MESSAGES = [
  'Everything is great!',
  'I slipped on a banana peel and dropped the camera on the cat and got a better photo.'
];

const NAMES = [
  'Constantine',
  'Michael',
  'Artem',
  'Senya',
  'Timothy',
  'Dmitry',
  'Anastasia',
  'Catherine',
  'Alice',
  'Vladislava',
  'Olga'
];

const NUMBER_OF_POSTS = 25;
const arrayIdNames = Array(5 * NUMBER_OF_POSTS).fill(true);
const arrayId = Array(NUMBER_OF_POSTS).fill(true);
const arrayUrl = Array(NUMBER_OF_POSTS).fill(true);

const getId = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      array[i] = false;
      return i + 1;
    }
  }
};

const createComment = () => ({
  id: getId(arrayIdNames),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomObject(MESSAGES),
  name: getRandomObject(NAMES)
});

const createComments = () => {
  const number = getRandomInt(1, 5);
  const comments = Array(number);
  for (let i = 0; i < number; i++) {
    comments[i] = createComment();
  }
  return comments;
};

const createPost = () => ({
  id: getId(arrayId),
  url: `photos/${getId(arrayUrl)}.jpg`,
  description: getRandomObject(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: createComments()
});

const createPosts = () => Array.from({ length: NUMBER_OF_POSTS }, createPost);

export{createPosts};
