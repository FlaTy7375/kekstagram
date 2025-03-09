import "./form.js";
import {changeEffect} from "./effects.js";
import {scaleEdit} from "./scale.js";
import {addPicture} from "./picture.js";
import {getRequest} from "./request.js";

//Отсюда получаем данные
const url = "https://25.javascript.htmlacademy.pro/kekstagram/data";

(async() => {
  try {
    const data = await getRequest(url);
    console.log("Данные загруженны:", data);
    scaleEdit();
    changeEffect();
    addPicture(data, 25);
  } catch(error) {
    console.error("Ошибка при загрузке данных:", error);
  }
})();
