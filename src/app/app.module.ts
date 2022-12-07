import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderModule } from './calender/calender.module';
import { TaskListModule } from './task-list/task-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalenderModule,
    TaskListModule,
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
