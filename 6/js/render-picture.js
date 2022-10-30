import {createPosts} from './data.js';
import {addBigPicture, bigPicture} from './full-size-picture.js';
const pictureTemplate = document.querySelector('#picture').content;
const picture = pictureTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createPicture = (post) => {
  const pictureClone = picture.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = post.url;
  pictureClone.querySelector('.picture__likes').textContent = post.likes;
  pictureClone.querySelector('.picture__comments').textContent = post.comments.length;
  picturesContainer.appendChild(pictureClone);
  pictureClone.addEventListener('click', () => {
    addBigPicture(post);
  });
};

const posts = createPosts();

for(const post of posts) {
  createPicture(post);
}

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');
  document.body.classList.remove('modal-open');
  bigPicture.querySelector('.social__comments').replaceChildren();
};

bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closeBigPicture();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
});
