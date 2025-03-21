function randomNumber(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function debounce (callback, timeoutDelay = 500) {
    // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
    // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
    let timeoutId;

    return (...rest) => {
        // Перед каждым новым вызовом удаляем предыдущий таймаут,
        // чтобы они не накапливались
        clearTimeout(timeoutId);

        // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
        timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

        // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
        // пока действие совершается чаще, чем переданная задержка timeoutDelay
    };
}

export {randomNumber, debounce}