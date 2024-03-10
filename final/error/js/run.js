const runTaskBtn = document.querySelector("#runTaskBtn");
const addListBtn = document.querySelector("#addListBtn");
const listGroup = document.querySelector("#listGroup");

// const worker=new Worker('js/worker.js');
// // console.dir(Worker);
// // console.log(worker);

// const createList = () => {
//   const li = document.createElement("li");
//   li.innerText = "list-" + Math.random();
//   return li;
// };
// const addListBtnHandler = () => {
//   listGroup.append(createList());
// };
// runTaskBtn.addEventListener("click", () => {
//     worker.postMessage('hello');
// });
// addListBtn.addEventListener("click", addListBtnHandler);
// worker.addEventListener('message',(message) => {
//     console.log(message.data);
// })
// console.dir(Worker);
const worker=new Worker('js/worker.js')
const createList = () => {
  const li = document.createElement("li");
  li.innerText = "list-" + Math.random();
  return li;
};


const addListBtnHandler = () => {
  listGroup.append(createList());
};
runTaskBtn.addEventListener("click", () => {
  // console.log(intensiveTask());
  worker.postMessage('start worker')
});
worker.addEventListener('message',(message) => {
  console.log(message.data);
})

addListBtn.addEventListener("click", addListBtnHandler);
