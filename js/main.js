import "./big-picture.js";
import "./form.js";
import {changeEffect} from "./effects.js";
import {scaleEdit} from "./scale.js";
import {generateImageInfo} from "./data.js";
import {addPicture} from "./picture.js";

let mass = generateImageInfo(12);
console.log(mass);

scaleEdit();
changeEffect();
addPicture(mass, 12);
