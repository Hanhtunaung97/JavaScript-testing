import { appButton, appInput, appTitle, count, lists } from "./elements.js";
import { inputBtnHandler } from "./handler.js";




export default class Todo{
    preRenderUi(){
        app.append(appTitle);
        app.append(appInput);
        app.append(appButton);
        app.append(lists);
        app.append(count);
    }
    listener(){
        appButton.addEventListener("click",inputBtnHandler);

    }
    init(){
        console.log("Start to do App");
        this.preRenderUi();
        this.listener();
        
    }
}