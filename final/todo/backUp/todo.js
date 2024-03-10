import { addTasks, getTasks, removeTask } from "./index.js";

const addNewTaskForm = document.querySelector("#addNewTaskForm");
const inputTask = document.querySelector("#inputTask");
const listGroup = document.querySelector("#listGroup");

const createList = ({ id, taskName }) => {
  const li = document.createElement("li");
  li.setAttribute("list-id",id)
  li.innerHTML = `<button class="list-del-btn border-neutral-300 border rounded-lg p-1">Delete</button> ${taskName}`;
  return li;
};

const taskRender = (lists) => {
    listGroup.innerHTML="";
  lists.forEach((list) => listGroup.append(createList(list)));
};

const addNewTaskFormHandler = (event) => {
  event.preventDefault();
  console.log(event.target);
  addTasks(inputTask.value);
  taskRender(getTasks());
  inputTask.value = null;
};
const listGroupHandler=(event) => {
    if(event.target.classList.contains("list-del-btn")){
        const currentIndex=event.target.closest("li").getAttribute("list-id");
        console.log(currentIndex);
        removeTask(parseFloat(currentIndex),1)
        taskRender(getTasks())
    }
    
}
listGroup.addEventListener("click",listGroupHandler)
addNewTaskForm.addEventListener("submit", addNewTaskFormHandler);
