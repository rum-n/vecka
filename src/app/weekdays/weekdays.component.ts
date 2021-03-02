import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.scss']
})
export class WeekdaysComponent implements OnInit {
  currentTime = new Date();
  newDay = new Date(this.currentTime);
  tomorrow = this.newDay.setDate(this.newDay.getDate() + 1)
  selected: Date;

  days = [
    this.currentTime,

  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
