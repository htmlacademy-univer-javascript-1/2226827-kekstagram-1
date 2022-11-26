import { addBigPicture, bigPictureElement, resetComments } from './full-size-picture.js';
import { isEscape } from './util.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureElement = pictureTemplate.querySelector('.picture');
const picturesElement = document.querySelector('.pictures');

const removeComments = () => {
  for (let i = 0; document.querySelectorAll('.social__comment').length; i++) {
    document.querySelector('.social__comment').remove();
  }
};

const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bigPictureElement.querySelector('.social__comment-count').classList.remove('hidden');
  bigPictureElement.querySelector('.comments-loader').classList.remove('hidden');
  document.body.classList.remove('modal-open');
  removeComments();
  resetComments();
};

const createPicture = (post) => {
  const pictureClone = pictureElement.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = post.url;
  pictureClone.querySelector('.picture__likes').textContent = post.likes;
  pictureClone.querySelector('.picture__comments').textContent = post.comments.length;
  picturesElement.appendChild(pictureClone);
  pictureClone.addEventListener('click', () => {
    removeComments();
    addBigPicture(post);
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

const renderPosts = (posts) => {
  for(const post of posts) {
    createPicture(post);
  }
};

export { renderPosts };
