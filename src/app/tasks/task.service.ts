import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

 private tasks: TaskItem[]=[
    new TaskItem("mm"),
    new TaskItem("pp"),
    new TaskItem("mbbm"),
    new TaskItem("mssm"),
   ]

  getAllTasks(): ReadonlyArray<TaskItem>{
    return this.tasks;  
  }

  addTask(newTask: NewTask){
   
    this.tasks=this.tasks.concat(new TaskItem(newTask.title))  }

  removeTask(existingTask: TaskItem){
    this.tasks=this.tasks.filter(task=>task!=existingTask)

  }


}

