const popup = document.querySelector(".big-picture");
const image = popup.querySelector(".big-picture__img img");
const likes = popup.querySelector(".likes-count");
const commentsValue = popup.querySelector(".comments-count");
const commentsList = popup.querySelector(".social__comments");
const description = popup.querySelector(".social__caption");
const commentCounter = popup.querySelector(".social__comment-count");
const commentLoader = popup.querySelector(".comments-loader");
const closePopup = document.querySelector(".big-picture__cancel");

let loadedCommentsCount = 0; // Количество уже загруженных комментариев
let saveFun; // Сохраяем аргументы функции
let saveIndex;

const createComment = function(fun, index) {
    for (let i = loadedCommentsCount; i < loadedCommentsCount + 5 && i < fun[index].comments.length;  i++) {
      const comment = document.createElement('li');
      comment.innerHTML =
      '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
      comment.classList.add('social__comment');
      comment.querySelector('.social__picture').src = fun[index].comments[i].avatar;
      comment.querySelector('.social__picture').alt = fun[index].comments[i].name;
      comment.querySelector('.social__text').textContent = fun[index].comments[i].message;
      commentsList.appendChild(comment);
    }
    loadedCommentsCount += 5;

    commentCounter.textContent = Math.min(loadedCommentsCount, fun[index].comments.length) + " из " + fun[index].comments.length;
    if (loadedCommentsCount >= fun[index].comments.length) {
      commentLoader.classList.add("hidden");
    } else {
      commentLoader.classList.remove("hidden");
    }

}

const createCommentsList = function(fun, index) {
    commentsList.innerHTML = "";
    loadedCommentsCount = 0;
    createComment(fun, index);

    if (5 >= fun[index].comments.length) {
      commentLoader.classList.add("hidden");
    } else {
      commentLoader.classList.remove("hidden");
    }
}

commentLoader.addEventListener("click", function() {
  if (saveFun && saveIndex !== null) {
    createComment(saveFun, saveIndex);
  }
})



const openBigPicture = function(fun, index) {
    document.querySelector("body").classList.add("modal-open");
    popup.classList.remove("hidden");
    image.src = fun[index].url;
    likes.textContent = fun[index].likes;
    commentsValue.textContent = fun[index].comments.length;
    description.textContent = fun[index].description;
    saveFun = fun;
    saveIndex = index;
    createCommentsList(fun, index);
}

const closePicture = function() {
    popup.classList.add("hidden");
    document.querySelector("body").classList.remove("modal-open");
    loadedCommentsCount = 0;
    saveFun = null;
    saveIndex = null;
}

// закрытие по нажатию на крестик
closePopup.addEventListener("click", closePicture);

// закрытие по нажатию на Esc
document.addEventListener("keydown", event => {
  if (event.code === 'Escape') {
    closePicture();
  }
})
export {openBigPicture}

