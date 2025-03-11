import "./form.js";
import "./message.js"
import {changeEffect} from "./effects.js";
import {scaleEdit} from "./scale.js";
import {addPictures} from "./picture.js";
import {getRequest} from "./request.js";
import {chooseFile} from "./img-preview.js";
import {showFilters, changeFilter} from "./img-filters.js";
import "./picture.js";

//Отсюда получаем данные
const url = "https://25.javascript.htmlacademy.pro/kekstagram/data";

(async() => {
  try {
    const data = await getRequest(url);
    addPictures(data, 25);
    chooseFile();
    showFilters();
    changeFilter(data);
    console.log("Данные загруженны:", data);
    scaleEdit();
    changeEffect();
  } catch(error) {
    console.error("Ошибка при загрузке данных:", error);
  }
})();
