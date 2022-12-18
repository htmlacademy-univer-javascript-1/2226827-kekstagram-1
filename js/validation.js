import { isEscape } from './util.js';

const textHashTagsElement = document.querySelector('.text__hashtags');
const textDescriptionElement = document.querySelector('.text__description');
const imageUploadFormElement = document.querySelector('.img-upload__form');
const regex = /^#[0-9a-zA-Zа-яА-ЯёЁ]{1,19}$/;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(imageUploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const hashtagChecker = (value) => {
  value = value.toLowerCase().trim();
  if (!value) {
    return true;
  }
  const hashtag = value.split(/\s+/);
  for (let i = 0; i < hashtag.length; i++) {
    if (!regex.test(hashtag[i])) {
      return false;
    }
  }
  const hashtags = [...new Set(hashtag)];
  return hashtag.length <= 5 && hashtag.length === hashtags.length;
};

const commentChecker = (comment) => comment.length <= MAX_COMMENT_LENGTH;

const onHashTagsKeyDown = (evt) => {
  if (isEscape(evt)) {
    evt.stopPropagation();
  }
};

const onDescriptionKeyDown = (evt) => {
  if (isEscape(evt)) {
    evt.stopPropagation();
  }
};

const userValidation = () => {
  textHashTagsElement.addEventListener('keydown', onHashTagsKeyDown);
  textDescriptionElement.addEventListener('keydown', onDescriptionKeyDown);

  pristine.addValidator(textHashTagsElement, hashtagChecker, 'Hashtag entered incorrectly');
  pristine.addValidator(textDescriptionElement, commentChecker, `The comment length has exceeded the ${MAX_COMMENT_LENGTH} character limit`);
};
const isValid = () => pristine.validate();

export { userValidation, isValid };
