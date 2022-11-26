import { isEscape } from './util.js';
import { scaleControlValue } from './scale-picture.js';
import { changeEffect, removeFilter } from './picture-effects.js';

const imageUploadStart = document.querySelector('.img-upload__start');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadPreview = imageUploadOverlay.querySelector('.img-upload__preview');
const effectLevelSlider = imageUploadForm.querySelector('.effect-level__slider');

const deleteForm = () => {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  textHashtags.value = '';
  textDescription.value = '';
  imageUploadForm.removeEventListener('change', changeEffect);
  removeFilter();
};

const formClosing = (evt) => {
  if (isEscape(evt)) {
    document.removeEventListener('keydown', formClosing);
    deleteForm();
  }
};

const listenerControl = () => {
  document.addEventListener('keydown', formClosing);
  imageUploadOverlay.querySelector('.img-upload__cancel').addEventListener('click', () => {
    deleteForm();
    document.removeEventListener('keydown', formClosing);
  }, { once: true } );
  scaleControlValue.value ='100%';
  imageUploadPreview.style = `transform: scale(${scaleControlValue})`;
};

const addForm = () => {
  imageUploadStart.addEventListener('change', () => {
    imageUploadOverlay.classList.remove('hidden');
    effectLevelSlider.classList.add('hidden');
    document.body.classList.add('modal-open');
    imageUploadForm.addEventListener('change', changeEffect);
    listenerControl();
  });
};

export { addForm };
