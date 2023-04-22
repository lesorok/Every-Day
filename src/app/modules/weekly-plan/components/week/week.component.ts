import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
})
export class WeekComponent implements OnInit {
  public monday: Date = new Date();
  public sunday: Date = new Date();
  public daysOfWeek: string[] = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
  ];

  constructor() {
    this.setWeek(new Date());
  }

  ngOnInit(): void {}

  public setWeek(date: Date): void {
    const day = date.getDay();
    this.monday = new Date(date);
    this.monday.setDate(date.getDate() - day + (day === 0 ? -6 : 1));
    this.sunday = new Date(this.monday);
    this.sunday.setDate(this.monday.getDate() + 6);
  }

  public getDaysOfWeek(): string[] {
    const daysOfWeek = [];
    const date = new Date(this.monday);
    for (let i = 0; i < 7; i++) {
      if (i === 0) {
        daysOfWeek.push('Понедельник');
      } else if (i === 1) {
        daysOfWeek.push('Вторник');
      } else if (i === 2) {
        daysOfWeek.push('Среда');
      } else if (i === 3) {
        daysOfWeek.push('Четверг');
      } else if (i === 4) {
        daysOfWeek.push('Пятница');
      } else if (i === 5) {
        daysOfWeek.push('Суббота');
      } else {
        daysOfWeek.push('Воскресенье');
      }
      date.setDate(date.getDate() + 1);
    }
    return daysOfWeek;
  }

  public nextWeek(): void {
    const nextMonday = new Date(this.monday);
    nextMonday.setDate(this.monday.getDate() + 7);
    this.setWeek(nextMonday);
  }

  public prevWeek(): void {
    const prevMonday = new Date(this.monday);
    prevMonday.setDate(this.monday.getDate() - 7);
    this.setWeek(prevMonday);
  }
}
