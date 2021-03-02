import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-dialog',
  templateUrl: './day-dialog.component.html',
  styleUrls: ['./day-dialog.component.scss']
})
export class DayDialogComponent implements OnInit {
  selected: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
