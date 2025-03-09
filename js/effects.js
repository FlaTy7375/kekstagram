const imagePreview = document.querySelector(".img-upload__preview img");
const effectsList = document.querySelectorAll(".effects__radio");
const effectValue = document.querySelector(".effect-level__value");
const slider = document.querySelector(".effect-level__slider");

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
})

slider.classList.add("hidden");

const resetSlider = function() {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  });
  imagePreview.className = '';
  imagePreview.style.cssText = "filter: none";
  slider.classList.add("hidden");
}

const sliderUpdate = function(effect) {
  slider.noUiSlider.off('update');
  slider.noUiSlider.on('update', function() {
    effectValue.value = slider.noUiSlider.get();
    imagePreview.style.cssText = "filter: " + effect.style + "("+ effectValue.value + effect.unit + ")";
  });
}

const updateSliderOptions = function(effect) {
  slider.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    step: effect.step,
    start: effect.max,
  })
}

const compareEffects = function(event) {
  EFFECTS.forEach(effect => {
    if (event.target.value === "none") {
      slider.classList.add("hidden");
      imagePreview.className = '';
      imagePreview.style.cssText = "filter: none";
      return;
    }
    if (event.target.value === effect.name) {
    slider.classList.remove("hidden");
    imagePreview.className = "effects__preview--" + effect.name;
    updateSliderOptions(effect);
    sliderUpdate(effect); }
  })
}

const searchEffect = function(value) {
  value.addEventListener("change", function (event) {
    if (event.target.checked) {
      compareEffects(event); }
  })
}

const changeEffect = function () {
  effectsList.forEach(effect => searchEffect(effect))
}

export {changeEffect, resetSlider}


