import { delBtnHandler } from "../handler.js";

export const createLi = (liText) => {
  const li = document.createElement("li");
  const delBtn=document.createElement("button");
  delBtn.innerText="Delete";
  li.append(delBtn);
const textNode=document.createTextNode(" "+liText);
li.append(textNode);
delBtn.addEventListener("click",delBtnHandler)
  return li;
};
