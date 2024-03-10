import Todo from "./index.js";

const addNewTaskForm = document.querySelector("#addNewTaskForm");
const inputTask = document.querySelector("#inputTask");
const listGroup = document.querySelector("#listGroup");

const todo=new Todo();

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
  todo.addTask(inputTask.value);
  taskRender(todo.getTasks());
  inputTask.value = null;
};
const listGroupHandler=(event) => {
    if(event.target.classList.contains("list-del-btn")){
        const currentIndex=event.target.closest("li").getAttribute("list-id");
        console.log(currentIndex);
        todo.removeTask(parseFloat(currentIndex),1)
        taskRender(todo.getTasks())
    }
    
}
listGroup.addEventListener("click",listGroupHandler)
addNewTaskForm.addEventListener("submit", addNewTaskFormHandler);
