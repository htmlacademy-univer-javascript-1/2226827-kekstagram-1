import {createPosts} from './data.js';
import {addBigPicture, bigPicture, resetComments} from './full-size-picture.js';
const pictureTemplate = document.querySelector('#picture').content;
const picture = pictureTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function removeComments() {
  for (let i = 0; document.querySelectorAll('.social__comment').length; i++) {
    document.querySelector('.social__comment').remove();
  }
}

const createPicture = (post) => {
  const pictureClone = picture.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = post.url;
  pictureClone.querySelector('.picture__likes').textContent = post.likes;
  pictureClone.querySelector('.picture__comments').textContent = post.comments.length;
  picturesContainer.appendChild(pictureClone);
  pictureClone.addEventListener('click', () => {
    removeComments();
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
  removeComments();
  resetComments();
};

bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closeBigPicture();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
});
