import { createBtn } from "./ui/btn.js";
import { createCount } from "./ui/counting.js";
import { createInput } from "./ui/input.js";
import { createUl } from "./ui/lists.js";
import { createTitle } from "./ui/title.js";

export const appTitle=createTitle("To Do App");
export const appInput=createInput();
export const appButton=createBtn("Save");
export const lists=createUl();
export const count=createCount("Total List",0);