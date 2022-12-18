const imageUploadPreview = document.querySelector('.img-upload__preview');
const imageUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imageUploadScale.querySelector('.scale__control--smaller');
const scaleControlValue = imageUploadScale.querySelector('.scale__control--value');
const scaleControlBigger = imageUploadScale.querySelector('.scale__control--bigger');
let scale = parseInt(scaleControlValue.value.replace('%', ''), 10);

const scaleUp = () => {
  if (scale + 25 > 100) {
    scale = 100;
  } else {
    scale += 25;
  }
  scaleControlValue.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / 100})`;
};

const scaleDown = () => {
  if (scale - 25 < 25) {
    scale = 25;
  } else {
    scale -= 25;
  }
  scaleControlValue.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / 100})`;
};

scaleControlSmaller.addEventListener('click', scaleDown);
scaleControlBigger.addEventListener('click', scaleUp);

export { scaleControlValue };
