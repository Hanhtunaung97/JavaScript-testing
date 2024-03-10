// import { addTask, getTasks, removeTask } from "./todo.js";

import Todo from "./todo.js";

const taskNewAddForm = document.querySelector("#taskNewAddForm");
const listGroup = document.querySelector("#listGroup");
const taskInput = document.querySelector("#taskInput");

const todo=new Todo();

const createList = ({ id, taskName }) => {
  const li = document.createElement("li");
  li.style.marginBottom=7+"px";
  li.setAttribute("list-id", id);
  li.innerHTML = `<button class="list-del-btn">Delete</button> ${taskName}`;
  return li;
};

const listRender = (lists) => {
  listGroup.innerHTML = ``;
  lists.forEach((list) => listGroup.append(createList(list)));
};

const taskNewAddFormHandler = (event) => {
  event.preventDefault();
  //   console.log(event.target);
  todo.addTask(taskInput.value);
  listRender(todo.getTasks());
  taskInput.value = null;
};

const listGroupHandler = (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("list-del-btn")) {
    const currentListId = event.target.closest("li").getAttribute("list-id");
    console.log(currentListId);
    todo.removeTask(currentListId);
    listRender(todo.getTasks());
  }
};
listGroup.addEventListener("click", listGroupHandler);
taskNewAddForm.addEventListener("submit", taskNewAddFormHandler);
