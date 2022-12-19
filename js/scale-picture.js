const imageUploadPreview = document.querySelector('.img-upload__preview');
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imageUploadScale.querySelector('.scale__control--smaller');
const scaleControlValue = imageUploadScale.querySelector('.scale__control--value');
const scaleControlBigger = imageUploadScale.querySelector('.scale__control--bigger');
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const SCALE_STEP = 25;

let scale = parseInt(scaleControlValue.value.replace('%', ''), 10);

const scaleUp = () => {
  if (scale + SCALE_STEP > MAX_SCALE_VALUE) {
    scale = MAX_SCALE_VALUE;
  } else {
    scale += SCALE_STEP;
  }
  scaleControlValue.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / 100})`;
};

const scaleDown = () => {
  if (scale - SCALE_STEP < MIN_SCALE_VALUE) {
    scale = MIN_SCALE_VALUE;
  } else {
    scale -= SCALE_STEP;
  }
  scaleControlValue.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / 100})`;
};

scaleControlSmaller.addEventListener('click', scaleDown);
scaleControlBigger.addEventListener('click', scaleUp);

export { scaleControlValue };
