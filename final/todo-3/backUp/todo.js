export default class Todo{
    constructor(){
        this.tasks=[];
    }
    addTask=(taskName) => {
        this.tasks.push({
            id:Date.now(),
            taskName,
        })
        
    }
    getTasks=() => {
        return this.tasks;
    }
    getTask=(id) => {
        return this.tasks.find(task=>task.id===id)
    }
    removeTask=(id) => {
        const currentIndex=this.tasks.findIndex(task=>task.id===id)
        this.tasks.splice(currentIndex,1)
        
    }
}