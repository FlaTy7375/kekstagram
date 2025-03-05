const controlSmaller = document.querySelector(".scale__control--smaller");
const controlBigger = document.querySelector(".scale__control--bigger");
const controlValue = document.querySelector(".scale__control--value");
const imagePreview = document.querySelector(".img-upload__preview img");

let step = 25; // Шаг изменения размера - 25%
let value = 100;

const makeSmaller = function () {
  if (value > 25) {
    value -= 25;
    controlValue.value = value + "%";
  }
  imagePreview.style.cssText = "transform: scale(" + value/100 + ")";
}

const makeBigger = function () {
  if (value < 100) {
    value += 25;
    controlValue.value = value + "%";
  }
  imagePreview.style.cssText = "transform: scale(" + value/100 + ")";
}

const scaleEdit = function () {
  controlSmaller.addEventListener("click", makeSmaller);
  controlBigger.addEventListener("click", makeBigger);
}

export { scaleEdit }
