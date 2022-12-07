import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskListComponent, 
  ],
   exports:[
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,

  ]
})
export class TaskListModule { }
