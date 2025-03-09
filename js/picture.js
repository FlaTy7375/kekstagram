import { openBigPicture } from "./big-picture.js";

let mainBlock = document.querySelector(".pictures");
let templateContent = document.querySelector("#picture").content.querySelector(".picture");

const addPicture = function(data, value) {
    for (let i = 0; i < value; i++) {
        const picture = templateContent.cloneNode(true);
        const image = picture.querySelector(".picture__img");
        const comment = picture.querySelector(".picture__comments");
        const likes = picture.querySelector(".picture__likes");
        image.src = data[i].url;
        likes.textContent = data[i].likes
        comment.textContent = data[i].comments.length;
        picture.addEventListener('click', () => {
          openBigPicture(data, i)
        });
        mainBlock.appendChild(picture);
    }
}

export {addPicture};
