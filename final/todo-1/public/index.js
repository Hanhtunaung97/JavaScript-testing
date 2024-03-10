import { addTasks, getTasks, removeTask } from "./todo.js";

const addNewTaskForm = document.querySelector("#addNewTaskForm");
const listGroup = document.querySelector("#listGroup");
const taskInput = document.querySelector("#taskInput");

const createList = ({ id, taskName }) => {
  const li = document.createElement("li");
  li.style.marginBottom=5 +"px";
  li.setAttribute("list-id", id);
  li.innerHTML = `<button class="list-del-btn">Delete</button> ${taskName}`;
  return li;
};

const listRender = (lists) => {
  listGroup.innerHTML = "";
lists.forEach(list=>listGroup.append(createList(list)))
  listGroup.append();
};

const addNewTaskFormHandler = (event) => {
  event.preventDefault();
  addTasks(taskInput.value);
  listRender(getTasks())
  taskInput.value=null;
};

const listGroupHandler=(event) => {
    if(event.target.classList.contains("list-del-btn")){
        // console.log(event.target);
        const currentListId=event.target.closest("li").getAttribute("list-id");
        // console.log(currentListId);
        removeTask(currentListId);
        listRender(getTasks())
    }
}

addNewTaskForm.addEventListener("submit", addNewTaskFormHandler);
listGroup.addEventListener("click",listGroupHandler)
