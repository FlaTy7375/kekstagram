import {postRequest} from "./request.js";
import {resetSlider} from "./effects.js";
import {showSuccessMessage, showErrorMessage} from "./message.js";

//Сюда будем отправлять данные
const url = "https://25.javascript.htmlacademy.pro/kekstagram";
const loadForm = document.querySelector(".img-upload__form");
const openWindow = loadForm.querySelector(".img-upload__overlay");
const loadImage = loadForm.querySelector("#upload-file");
const closeButton = loadForm.querySelector(".img-upload__cancel");
const hashtagField = document.querySelector(".text__hashtags");
const commentField = document.querySelector(".text__description");

const pristine = new Pristine(loadForm, {
  classTo: "img-upload__element",
  errorTextParent: "img-upload__element",
  errorTextClass: "img-upload__error",
});

const isTextFieldFocused = function () {
    return document.activeElement === hashtagField ||
    document.activeElement === commentField;
}

const validateTagsLength = function (str) {
    return str.length < 21 && str.length >= 2;
}

const validateTagsValue = function(tags) {
  return tags.length < 6;
}

const validateText = function (str) {
    return !/[^a-zA-Zа-яА-Я0-9ёЁ]/g.test(str.slice(1)) ;
};

const validateAll = function (str) {
  return validateText(str) && str[0] == "#" && validateTagsLength(str);
}

const validateUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateHashtag = function (value) {
  const tags = value.toLowerCase().trim().split(" ").filter((tag) => tag.trim());
  return tags.every(validateAll) && validateTagsValue(tags) && validateUniqueTags(tags);
};

const validateComment = function (value) {
  return value.length <= 130;
}

pristine.addValidator(
  hashtagField,
  validateHashtag,
  "неверно заполнены хештеги"
);

pristine.addValidator(
  commentField,
  validateComment,
  "длина комментария должна быть меньше 140 символов"
);

const showModal = function () {
  openWindow.classList.remove("hidden");
  document.querySelector("body").classList.add("modal-open");
  document.addEventListener("keydown", closeOnEsc);
};

const closeOnEsc = function (event) {
  if (event.key === "Escape" && !isTextFieldFocused()) {
    event.preventDefault();
    closeModal();
  }
};

const closeModal = function () {
  openWindow.classList.add("hidden");
  document.querySelector("body").classList.remove("modal-open");
  document.removeEventListener("keydown", closeOnEsc);
  resetSlider();
  loadForm.reset();
  pristine.reset();
};

const onFormSubmit = async (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  if (pristine.validate()) {
    try {
      const response = await postRequest(url, formData);
      console.log('Success:', response);
      closeModal();
      showSuccessMessage()
    } catch (error) {
      closeModal();
      showErrorMessage()
    }
  }
};

loadImage.addEventListener("change", showModal);
closeButton.addEventListener("click", closeModal);
loadForm.addEventListener("submit", onFormSubmit);

export {closeModal}
