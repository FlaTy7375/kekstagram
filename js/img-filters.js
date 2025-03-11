import {createRandomPictures, addPictures, addDiscussedPictures} from "./picture.js";
import {debounce} from "./util.js";

const imgFilters = document.querySelector(".img-filters");
const form = imgFilters.querySelector(".img-filters__form");
const defaultBtn = imgFilters.querySelector("#filter-default");
const randomBtn = imgFilters.querySelector("#filter-random");
const discussedBtn = imgFilters.querySelector("#filter-discussed");
const picturesContainer = document.querySelector(".pictures");

const btnFilters = [
    "default",
    "random",
    "discussed"
]

const RERENDER_DELAY = 500;

const showFilters = function () {
    imgFilters.classList.remove("img-filters--inactive")
}

const changeClasses = function (btn1, btn2) {
    if (btn1.classList.contains("img-filters__button--active")) {
        btn1.classList.remove("img-filters__button--active");
    }

    if (btn2.classList.contains("img-filters__button--active")) {
        btn2.classList.remove("img-filters__button--active");
    }
}

const removeAllPictures = function () {
    const pictures = document.querySelectorAll(".picture");
    pictures.forEach((picture) => {
        if (picturesContainer.contains(picture)) {
            picture.remove()
        }
    })
}

const addDefaultPictures = function (data) {
    changeClasses(randomBtn, discussedBtn);

    if (!defaultBtn.classList.contains("img-filters__button--active")) {
        const removeDebounce = debounce(() => {
            removeAllPictures();
            addPictures(data, 25);
        }, RERENDER_DELAY);

        removeDebounce();
        
        defaultBtn.classList.add("img-filters__button--active");
    }
}

const addRandomPictures = function (data) {
    changeClasses(defaultBtn, discussedBtn);
    
    if (!randomBtn.classList.contains("img-filters__button--active")) {
        const removeDebounce = debounce(() => {
            removeAllPictures();
            createRandomPictures(data, 10);
        }, RERENDER_DELAY);

        removeDebounce();

        randomBtn.classList.add("img-filters__button--active");
        
    }
}

const createDiscussedPictures = function (data) {
    changeClasses(defaultBtn, randomBtn);
    
    if (!discussedBtn.classList.contains("img-filters__button--active")) {
        const removeDebounce = debounce(() => {
            removeAllPictures();
            addPictures(data, 25);
            addDiscussedPictures();
        }, RERENDER_DELAY);

        removeDebounce();

        discussedBtn.classList.add("img-filters__button--active");
    }
}

const changeFilter = function (data) {
    form.addEventListener("click", (elem) => {
        const btnID = elem.target.id;

        if (btnID.endsWith(btnFilters[0])) {
            addDefaultPictures(data);
        }
        
        if (btnID.endsWith(btnFilters[1])) {
            addRandomPictures(data);
        }

        if (btnID.endsWith(btnFilters[2])) {
            createDiscussedPictures(data);
        }
    })
}

export {showFilters, changeFilter}
