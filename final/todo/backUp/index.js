// state or data

const tasks = [];

export const addTasks = (taskName) => {
  tasks.push({
    id: Date.now(),
    taskName,
  });
};

export const getTasks=() => {
    return tasks;
}

export const getTask=(id) => {
    return tasks.find(task=>task.id===id)
}

export const removeTask=(id) => {
    const currentIndex=tasks.findIndex(task=>task.id === id)
    // console.log(currentIndex);
    tasks.splice(currentIndex,1)
}
