import { LightningElement, track } from 'lwc';

export default class TaskProgressTracker extends LightningElement {
    @track tasks = [];
    @track newTask = '';

    handleTaskChange(event) {
        this.newTask = event.target.value;
    }

    handleAddTask() {
        if (this.newTask) {
            const newTask = {
                id: Date.now().toString(),
                name: this.newTask,
                completed: false
            };
            this.tasks = [...this.tasks, newTask];
            this.newTask = '';
        }
    }

    handleTaskCompletion(event) {
        const taskId = event.target.dataset.taskId;
        this.tasks = this.tasks.map(task => {
            if (task.id === taskId) {
                task.completed = event.target.checked;
            }
            return task;
        });
        this.updateTaskCompletionClass(taskId);
    }
    
    updateTaskCompletionClass(taskId) {
        const taskElement = this.template.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            const task = this.tasks.find(task => task.id === taskId);
            if (task && task.completed) {
                taskElement.classList.add('task-completed');
            } else {
                taskElement.classList.remove('task-completed');
            }
        }
    }
    
    
}
