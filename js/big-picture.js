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
let saveData; // Сохраяем аргументы функции
let saveIndex;

const createComment = function(data, index) {
    for (let i = loadedCommentsCount; i < loadedCommentsCount + 5 && i < data[index].comments.length;  i++) {
      const comment = document.createElement('li');
      comment.innerHTML =
      '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
      comment.classList.add('social__comment');
      comment.querySelector('.social__picture').src = data[index].comments[i].avatar;
      comment.querySelector('.social__picture').alt = data[index].comments[i].name;
      comment.querySelector('.social__text').textContent = data[index].comments[i].message;
      commentsList.appendChild(comment);
    }
    loadedCommentsCount += 5;

    commentCounter.textContent = Math.min(loadedCommentsCount, data[index].comments.length) + " из " + data[index].comments.length;
    if (loadedCommentsCount >= data[index].comments.length) {
      commentLoader.classList.add("hidden");
    } else {
      commentLoader.classList.remove("hidden");
    }

}

const createCommentsList = function(data, index) {
    commentsList.innerHTML = "";
    loadedCommentsCount = 0;
    createComment(data, index);

    if (5 >= data[index].comments.length) {
      commentLoader.classList.add("hidden");
    } else {
      commentLoader.classList.remove("hidden");
    }
}

commentLoader.addEventListener("click", function() {
  if (saveData && saveIndex !== null) {
    createComment(saveData, saveIndex);
  }
})

const openBigPicture = function(data, index) {
    document.querySelector("body").classList.add("modal-open");
    popup.classList.remove("hidden");
    image.src = data[index].url;
    likes.textContent = data[index].likes;
    commentsValue.textContent = data[index].comments.length;
    description.textContent = data[index].description;
    saveData = data;
    saveIndex = index;
    createCommentsList(data, index);
}

const closePicture = function() {
    popup.classList.add("hidden");
    document.querySelector("body").classList.remove("modal-open");
    loadedCommentsCount = 0;
    saveData = null;
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

