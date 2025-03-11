import {openBigPicture} from "./big-picture.js";
import {randomNumber} from "./util.js";

const mainBlock = document.querySelector(".pictures");
const templateContent = document.querySelector("#picture").content.querySelector(".picture");
let pictureArray = []

const createPicture = function (data, index) {
  const picture = templateContent.cloneNode(true);
  const image = picture.querySelector(".picture__img");
  const comment = picture.querySelector(".picture__comments");
  const likes = picture.querySelector(".picture__likes");
  image.src = data[index].url;
  likes.textContent = data[index].likes
  comment.textContent = data[index].comments.length;
  pictureArray[index] =  {comments: comment.textContent, img: picture};
  picture.addEventListener('click', () => {
    openBigPicture(data, index);
  });

  mainBlock.appendChild(picture);
}

const addPictures = function (data, value) {
  for (let i = 0; i < value; i++) {
    createPicture(data, i);
  }
}

const addDiscussedPictures = function () {
  pictureArray.sort(function (a, b) {
    return b.comments - a.comments;
  })

  pictureArray.forEach((picture) => {
    mainBlock.append(picture.img)
  })
}

const createRandomPictures = function (data, value) {
  const randomArray = new Set();

  while (randomArray.size  < value) {
    randomArray.add(randomNumber(1, 25));
  }

  randomArray.forEach((number) => {
    createPicture(data, number - 1);
  })
  
}

export {addPictures, createRandomPictures, addDiscussedPictures};
