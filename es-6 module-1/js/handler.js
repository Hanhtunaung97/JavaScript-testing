import { lists, textInput } from "./element.js";
import { app } from "./index.js";
import { createLi } from "./ui/li.js";

export const saveBtnHandler = () => {
  console.log(textInput.value);
  const list = createLi(textInput.value);
  lists.append(list);
  app.querySelector("#counter").innerText = lists.children.length;
  textInput.value = null;
};
export const delBtnHandler = (event) => {
  event.target.closest("li").remove();
  app.querySelector("#counter").innerText = lists.children.length;
};
