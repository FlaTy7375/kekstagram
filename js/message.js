const successMessage = document.querySelector("#success").content.querySelector(".success");
const errorMessage = document.querySelector("#error").content.querySelector(".error");
const successBtn = successMessage.querySelector(".success__button");
const errorBtn = errorMessage.querySelector(".error__button");

const addEventListeners = function (closeButton, onButtonClick) {
    closeButton.addEventListener("click", onButtonClick);
    document.addEventListener("keydown", onEscKeydown);
    document.addEventListener("click", onBodyClick);
};

const removeEventListeners = function (closeButton, onButtonClick) {
    document.removeEventListener("keydown", onEscKeydown);
    closeButton.removeEventListener("click", onButtonClick);
    document.removeEventListener("click", onBodyClick);
};

const removeMessage = function () {
    if (document.body.contains(successMessage)) {
        successMessage.remove();
        removeEventListeners(successBtn, onBtnSuccessClick);
    }

    if (document.body.contains(errorMessage)) {
        errorMessage.remove();
        removeEventListeners(errorBtn, onBtnErrorClick);
    }
};

const onBodyClick = function (event) {
    if (
      event.target.closest('.success__inner') ||
      event.target.closest('.error__inner')
    ) {
      return;
    }
    removeMessage();
}

const onEscKeydown = function (event) {
    if (event.code === 'Escape') {
        removeMessage();
    }
};

const onBtnSuccessClick = function () {
    successMessage.remove();
    removeEventListeners(successBtn, onBtnSuccessClick);
}

const onBtnErrorClick = function () {
    errorMessage.remove();
    removeEventListeners(errorBtn, onBtnErrorClick);
}


const hideSuccessMessage = function () {
    addEventListeners(successBtn, onBtnSuccessClick);
}

const hideErrorMessage = function () {
    addEventListeners(errorBtn, onBtnErrorClick);
}

const showSuccessMessage = function () {
    hideSuccessMessage();
    document.querySelector("body").appendChild(successMessage);
} 

const showErrorMessage = function () {
    hideErrorMessage();
    document.querySelector("body").appendChild(errorMessage);
}

export {showSuccessMessage, showErrorMessage}