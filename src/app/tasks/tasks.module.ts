import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TaskListComponent, 
  ],
   providers:[TaskService],
   exports:[
    TaskListComponent,
  ],
  imports: [HttpClientModule,
    CommonModule,
    MatDatepickerModule,
    FormsModule,RouterModule,

  ]
})
export class TasksModule { }
