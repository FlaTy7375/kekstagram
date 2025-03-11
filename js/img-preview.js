import {showErrorMessage} from "./message.js";
import {closeModal} from "./form.js";

const imagePreview = document.querySelector(".img-upload__preview img");
const fileChooser = document.querySelector(".img-upload__start input[type=file]");
const effectsPreviews = document.querySelectorAll(".effects__preview");

let file;

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp', 'avif'];
const MIME_TYPES = ['image/gif', 'image/jpeg', 'image/png', 'image/webp', 'image/avif'];

const onError = function () {
    closeModal();
    showErrorMessage();
    throw new Error('Не верный формат фото. Попробуйте ещё раз');
}

const getFileData = function (fileEvent) {
    file = fileEvent.files[0];
    const fileName = file.name.toLowerCase();
    const fileType = file.type;
    const matchesMimeType = MIME_TYPES.includes(fileType);

    const matches = FILE_TYPES.some((it) => {
        return fileName.endsWith(it);
    });

    return matches && matchesMimeType;
}

const chooseFile = function () {
    fileChooser.addEventListener('change', () => {
        if (getFileData(fileChooser)) {
        imagePreview.src = URL.createObjectURL(file);
        effectsPreviews.forEach((preview) => {
            preview.style.backgroundImage = 'url("' + imagePreview.src + '")';
        })
        } else {
            onError()
        }
    })
};

export {chooseFile}