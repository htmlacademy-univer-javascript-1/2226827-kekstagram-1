const hasgTags = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const regex = /^#[0-9a-zA-Zа-яА-ЯёЁ]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

function hashtagChecker(value) {
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
}

function commentChecker(comment) {
  return comment.length <= 140;
}

function stopDuringFocus(evt) {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
}

hasgTags.onkeydown = stopDuringFocus;
description.onkeydown = stopDuringFocus;

pristine.addValidator(hasgTags, hashtagChecker, 'Hashtag entered incorrectly');
pristine.addValidator(description, commentChecker, 'The comment length has exceeded the 140 character limit');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
