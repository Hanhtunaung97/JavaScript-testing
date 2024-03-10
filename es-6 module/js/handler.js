import { appInput, lists } from "./elements.js";
import { app } from "./index.js";
import { createLi } from "./ui/list.js";

export const inputBtnHandler = () => {
  console.log(appInput.value);
  const list = createLi(appInput.value);
  lists.append(list);
  app.querySelector("#counter").innerText=lists.children.length;

  appInput.value = null;
};
export const delBtnHandler=(event) => {
    console.log(event.target.closest("li"));
    event.target.closest("li").remove();
    app.querySelector("#counter").innerText=lists.children.length;
}
