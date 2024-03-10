import { createSaveBtn } from "./ui/button.js";
import { createCount } from "./ui/counting.js";
import { createInput } from "./ui/input.js";
import { createUl } from "./ui/lists.js";
import { createTitle } from "./ui/title.js";

export const appTitle=createTitle("To Do App");
export const textInput=createInput();
export const saveBtn=createSaveBtn("Delete");
export const lists=createUl();
export const counterList=createCount("Total List",0);