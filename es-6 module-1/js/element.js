import { createSaveBtn } from "./ui/button.js";
import { createCounter } from "./ui/counting.js";
import { createInput } from "./ui/input.js";
import { createUl } from "./ui/lists.js";
import { createTitle } from "./ui/title.js";

export const appTitle=createTitle("To Do App");
export const textInput=createInput();
export const saveBtn=createSaveBtn("Save");
export const lists=createUl();
export const counterList=createCounter("Total List",0);