//Случайное число
const getRandomNumber = function(first, last) {
    first = Math.ceil(first);
    last = Math.floor(last);
    if (first >= 0 && last >+ 0) {
        return Math.floor(Math.random() * (last - first + 1) + first);
    }
};

export {getRandomNumber};