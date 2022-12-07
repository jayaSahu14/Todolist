import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void {
   throw new Error("failed to load calender");
   
  }
 
  selectedDate=new Date();

}
