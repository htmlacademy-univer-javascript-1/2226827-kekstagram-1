const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview');
const effectLevelSlider = imageUploadForm.querySelector('.effect-level__slider');
const effectLevelValue = imageUploadForm.querySelector('.effect-level__value');

const EFFECTS = {
  'chrome': { filter: 'grayscale( )', options: { min: 0, max: 1, start: 1, step: 0.1 } },
  'sepia': { filter: 'sepia( )', options: { min: 0, max: 1, start: 1, step: 0.1 } },
  'marvin': { filter: 'invert( %)', options: { min: 0, max: 100, start: 100, step: 1 } },
  'phobos': { filter: 'blur( px)', options: { min: 0, max: 3, start: 3, step: 0.1 } },
  'heat': { filter: 'brightness( )', options: { min: 1, max: 3, start: 3, step: 0.1 } },
};

noUiSlider.create(effectLevelSlider, { range: { min: 0, max: 0 }, start: 0 });

let previousEffect = 'effects__preview--none';

const removeFilter = () => {
  imageUploadPreview.classList.remove(previousEffect);
  imageUploadPreview.classList.add('effects__preview--none');
  imageUploadPreview.style.filter = 'none';
  effectLevelSlider.classList.toggle('hidden');
  previousEffect = 'effects__preview--none';
};

const changeEffect = (evt) => {
  if (evt.target.id.slice(0, 7) === 'effect-') {
    const newEffectName = evt.target.id.slice(7);
    const currentEffect = `effects__preview--${newEffectName}`;

    imageUploadPreview.classList.remove(previousEffect);
    imageUploadPreview.classList.add(currentEffect);
    previousEffect = currentEffect;

    if (newEffectName === 'none') {
      imageUploadPreview.style.filter = 'none';
      effectLevelSlider.classList.toggle('hidden');
    }
    else {
      if (effectLevelSlider.classList.contains('hidden')) {
        effectLevelSlider.classList.remove('hidden');
      }

      const options = EFFECTS[newEffectName].options;
      effectLevelSlider.noUiSlider.updateOptions({
        range: { min: options.min, max: options.max},
        start: options.start,
        step: options.step
      });

      effectLevelSlider.noUiSlider.on('update', () => {
        effectLevelValue.value = effectLevelSlider.noUiSlider.get();
        imageUploadPreview.style.filter = EFFECTS[newEffectName].filter.replace(' ', effectLevelValue.value);
      });
    }
  }
};

export{changeEffect, removeFilter};
