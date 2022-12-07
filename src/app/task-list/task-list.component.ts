import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private route:ActivatedRoute){}
  date:Date=new Date();
  
  newTaskTitle:string="";
  ngOnInit(): void {
   this.date=new Date(this.route.snapshot.params['date']);
  }

  tasks:Task[]=[
    new Task("mm"),
    new Task("pp"),
    new Task("mbbm"),
    new Task("mssm"),
   ]
 
   add(taskNgform: NgForm){
    if (taskNgform.touched==false)
    return;
    if (taskNgform.valid==false)
    return;
     this.tasks.push(new Task(this.newTaskTitle))
     taskNgform.reset({date:this.date});

   }
 
   remove(existingTask:Task){
    var userCnf=confirm(`sure want to delete task \n "${existingTask.title}"`)
    if(userCnf){
     this.tasks=this.tasks.filter(tasks=>tasks!=existingTask)
    }
   }
 
  }
 
 
 class Task {
   constructor(public title:string) {
     
   }
   markAsDone(){
     this.isDone= !this.isDone;
   }
 
   public isDone=false
   
 

}
