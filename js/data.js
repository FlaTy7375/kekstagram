import {getRandomNumber} from "./util.js";

const descriptions = [
    "Закат над морем.",
    "Снежные вершины гор.",
    "Дети играют в парке.",
    "Пейзаж с зелеными холмами.",
    "Кофейня в уютном уголке.",
    "Цветные огоньки на празднике.",
    "Прогулка по осеннему лесу.",
    "Дождливый день в городе.",
    "Фотосессия собак в парке.",
    "Звездное небо над полем."
]

const messages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
]

const names = ["Анна", "Дмитрий", "Екатерина", "Сергей", "Мария", "Алексей", "Ольга", "Николай", "Татьяна", "Игорь"];

//Проверка длины строки
const checkStringLength = function(string, maxLength) {
    return string.length <= maxLength;
};

const generateMessages = function() {
    let value = getRandomNumber(1, 2);
    let message = "";
    for (let i = 0; i < value; i++) {
        message += messages[getRandomNumber(0, 5)];
    }
    return message;
};

const generateComments = function(value) {
    let comments = [];
    for (let i = 0; i < value; i++) {
        comments[i] = {
            id: getRandomNumber(1, 1000),
            avatar: "img/avatar-" + getRandomNumber(1, 6) + ".svg",
            message: generateMessages(),
            name: names[getRandomNumber(0, 9)]
        }
    }
    return comments;
};

const generateImageInfo = function(value) {
    let imageInfo = []
    for (let i = 0; i < value; i++) {
        imageInfo[i] = {
            id: getRandomNumber(1, 25),
            url: "photos/" + (i+1) + ".jpg",
            description: descriptions[getRandomNumber(0, 9)],
            likes: getRandomNumber(15, 200),
            comments: generateComments(getRandomNumber(1, 20))
        }
    }
    return imageInfo;
};

export {generateImageInfo};
