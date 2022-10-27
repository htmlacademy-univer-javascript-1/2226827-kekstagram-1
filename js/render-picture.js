const pictureTemplate = document.querySelector('#picture').content;
const picture = pictureTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createPicture = (post) => {
  const pictureClone = picture.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = post.url;
  pictureClone.querySelector('.picture__likes').textContent = post.likes;
  pictureClone.querySelector('.picture__comments').textContent = post.comments.length;
  picturesContainer.appendChild(pictureClone);
};

export {createPicture};
