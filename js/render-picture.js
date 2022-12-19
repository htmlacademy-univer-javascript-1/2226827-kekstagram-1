import { addBigPicture, bigPictureElement, resetComments } from './full-size-picture.js';
import { isEscape, getRandomElements, debounce } from './util.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureElement  = pictureTemplate.querySelector('.picture');
const picturesElement  = document.querySelector('.pictures');
const imageFiltersForm = document.querySelector('.img-filters__form');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const TIMEOUT_DELAY = 500;
const COUNT_OF_RANDOM_POSTS = 10;
let newPosts = [], tmpPosts = [];

const removeComments = () => {
  for (let i = 0; document.querySelectorAll('.social__comment').length; i++) {
    document.querySelector('.social__comment').remove();
  }
};

const closeBigPicture = () => {
  removeComments();
  bigPictureElement.classList.add('hidden');
  bigPictureElement.querySelector('.social__comment-count').classList.remove('hidden');
  bigPictureElement.querySelector('.comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.remove('modal-open');
  resetComments();
};

const generateErrorMessage = (message) => {
  const error = document.querySelector('#error').content.querySelector('section').cloneNode(true);
  error.querySelector('h2').textContent = message;
  document.querySelector('body').append(error);
};

const createPosts = () => {
  tmpPosts.forEach((post) => picturesElement.removeChild(post));
  tmpPosts = [];
  newPosts.forEach((post) => {
    const pictureClone = pictureElement.cloneNode(true);
    pictureClone.querySelector('.picture__img').src = post.url;
    pictureClone.querySelector('.picture__likes').textContent = post.likes;
    pictureClone.querySelector('.picture__comments').textContent = post.comments.length;
    picturesElement.appendChild(pictureClone);
    tmpPosts.push(pictureClone);
    pictureClone.addEventListener('click', () => {
      removeComments();
      addBigPicture(post);
    });
  });

  bigPictureElement.querySelector('.big-picture__cancel').addEventListener('click', () => {
    closeBigPicture();
  }, { once: true });

  document.addEventListener('keydown', (evt) => {
    if (isEscape(evt)) {
      closeBigPicture();
    }
  });
};

const changeFilter = (posts, db) => {
  imageFiltersForm.addEventListener('click', (evt) => {
    newPosts = [...posts];
    switch (evt.target.id) {
      case 'filter-default':
        defaultFilter.classList.add('img-filters__button--active');
        randomFilter.classList.remove('img-filters__button--active');
        discussedFilter.classList.remove('img-filters__button--active');
        break;
      case 'filter-random':
        defaultFilter.classList.remove('img-filters__button--active');
        randomFilter.classList.add('img-filters__button--active');
        discussedFilter.classList.remove('img-filters__button--active');
        newPosts = getRandomElements(newPosts, COUNT_OF_RANDOM_POSTS);
        break;
      case 'filter-discussed':
        defaultFilter.classList.remove('img-filters__button--active');
        randomFilter.classList.remove('img-filters__button--active');
        discussedFilter.classList.add('img-filters__button--active');
        newPosts.sort((a, b) => b.comments.length - a.comments.length);
        break;
    }
    db();
  });
};

const renderPosts = (posts) => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  newPosts = [...posts];
  createPosts();
  changeFilter(posts, debounce(() => createPosts(), TIMEOUT_DELAY));
};

export { renderPosts, generateErrorMessage };
