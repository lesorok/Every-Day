import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-now',
  templateUrl: './date-now.component.html',
  styleUrls: ['./date-now.component.scss'],
})
export class DateNowComponent implements OnInit {
  currentDate: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
