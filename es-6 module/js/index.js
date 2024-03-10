// import { createBtn } from "./ui/btn.js";
// import { createInput } from "./ui/input.js";
// import { createTitle } from "./ui/title.js";

import Todo from "./todo.js";



// app.append(createTitle("To Do App"));
// app.append(createInput());
// app.append(createBtn("Save"));
export const app=document.querySelector("#app");

const todo =new Todo();
todo.init();