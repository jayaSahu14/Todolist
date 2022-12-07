import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers:[TaskService]
})
export class TaskListComponent implements OnInit {
  constructor(private route:ActivatedRoute, private taskService:TaskService){}

 
  tasks=this.taskService.getAllTasks();
  
  date:Date=new Date();
  newTask: NewTask=new NewTask();

  ngOnInit(): void {
    var strDate=this.route.snapshot.params['date'];
   this.newTask=new NewTask(this.newTask.title, new Date(strDate));
  }

  
 
   add(taskNgform: NgForm){
    if (taskNgform.touched==false)
    return;
    if (taskNgform.valid==false)
    return;
     this.taskService.addTask(this.newTask);
    
     taskNgform.reset({date:this.newTask.date});
   }
 
   remove(existingTask:TaskItem){
    var userCnf=confirm(`sure want to delete task \n "${existingTask.title}"`)
    if(userCnf){
      this.taskService.removeTask(existingTask);
     
    }
   }
 
  }
 
 
