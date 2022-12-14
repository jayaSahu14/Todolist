import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderModule } from './calender/calender.module';
import { TasksModule } from './tasks/tasks.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskService } from './tasks/task.service';
import { GlobalErrorHandler } from './GlobalErrorHandler';
//import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalenderModule,
    TasksModule,
    
    
  ],
 
  providers: [{provide:ErrorHandler, useClass:GlobalErrorHandler}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
