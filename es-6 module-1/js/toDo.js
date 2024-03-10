import { appTitle, counterList, lists, saveBtn, textInput } from "./element.js";
import { saveBtnHandler } from "./handler.js";

export default class Todo {
  renderUi() {
    app.append(appTitle);
    app.append(textInput);
    app.append(saveBtn);
    app.append(lists);
    app.append(counterList);
  }
  listener() {
    saveBtn.addEventListener("click", saveBtnHandler);
  }
  init() {
    this.renderUi();
    this.listener();
  }
}
