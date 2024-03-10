export default class Todo {
  constructor() {
    this.tasks = [];
  }
  addTasks=(taskName) => {
    this.tasks.push({
        id:Date.now(),
        taskName,
    })
  }
  getTasks=() => {
    return this.tasks;
  }
  removeTasks=(id) => {
    const currentIndex=this.tasks.findIndex(task=>task.id===id)
    this.tasks.splice(currentIndex,1)
  }
}
