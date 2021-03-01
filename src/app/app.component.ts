import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vecka';
  currentMonth = Date.now();

  constructor(
    public router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
   
  }

}
