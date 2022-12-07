import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import {Observable, BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TaskService {

  constructor(private HttpClient:HttpClient) { }

 private tasks= new BehaviorSubject([
    new TaskItem("mm"),
    new TaskItem("pp"),
    new TaskItem("mbbm"),
    new TaskItem("mssm"),
   ])

  getAllTasks(): Observable<TaskItem[]>{
    return this.tasks;  
  }

  addTask(newTask: NewTask){
   
   var updatedTask=this.tasks.value.concat(new TaskItem(newTask.title))
  this.tasks.next(updatedTask);
  }

  removeTask(existingTask: TaskItem){
    var updatedTask=this.tasks.value.filter(task=>task!=existingTask);
    this.tasks.next(updatedTask);

  }


}

