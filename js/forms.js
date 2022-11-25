const imageStart = document.querySelector('.img-upload__start');
const imageEditor = document.querySelector('.img-upload__overlay');
const fileUpload = document.querySelector('#upload-file');
const description = document.querySelector('.text__description');
const hashtags = document.querySelector('.text__hashtags');

const deleteForm = () => {
  imageEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  fileUpload.value = '';
  hashtags.value = '';
  description.value = '';
};

const formClosing = (evt) => {
  if (evt.key === 'Escape') {
    document.removeEventListener('keydown', formClosing);
    deleteForm();
  }
};

const listenerControl = () => {
  document.addEventListener('keydown', formClosing);
  imageEditor.querySelector('.img-upload__cancel').addEventListener('click', () => {
    deleteForm();
    document.removeEventListener('keydown', formClosing);
  });
};

imageStart.addEventListener('change', () => {
  imageEditor.classList.remove('hidden');
  document.body.classList.add('modal-open');
  listenerControl();
});
