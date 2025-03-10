const successMessage = document.querySelector("#success").content.querySelector(".success");
const errorMessage = document.querySelector("#error").content.querySelector(".error");
const successBtn = successMessage.querySelector(".success__button");
const errorBtn = errorMessage.querySelector(".error__button");

function onBodyClick(event) {
    if (
      event.target.closest('.success__inner') ||
      event.target.closest('.error__inner')
    ) {
      return;
    }
    errorMessage.remove() || successMessage.remove();
    document.removeEventListener('click', onBodyClick);
  }

const onEscKeydown = function (event) {
    if (event.code === 'Escape') {
        errorMessage.remove() || successMessage.remove();
        document.removeEventListener("keydown", onEscKeydown);
    }
};

const onBtnSuccessClick = function () {
    successMessage.remove();
    document.removeEventListener("keydown", onEscKeydown);
    successBtn.removeEventListener("click", onBtnSuccessClick);
}

const onBtnErrorClick = function () {
    errorMessage.remove();
    document.removeEventListener("keydown", onEscKeydown);
    errorBtn.removeEventListener("click", onBtnErrorClick);
}


const hideSuccessMessage = function () {
    //Закрыть на кнокпку
    successBtn.addEventListener("click", onBtnSuccessClick)
    //Закрыть на ESC
    document.addEventListener("keydown", onEscKeydown)
    //Закрыть по клику на пустую зону
    document.addEventListener("click", onBodyClick)
}

const hideErrorMessage = function () {
    //Закрыть на кнокпку
    errorBtn.addEventListener("click", onBtnErrorClick);
    //Закрыть на ESC
    document.addEventListener("keydown", onEscKeydown);
    //Закрыть по клику на пустую зону
    document.addEventListener("click", onBodyClick)
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