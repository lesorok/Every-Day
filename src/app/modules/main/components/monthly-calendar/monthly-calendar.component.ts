import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-calendar',
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.scss'],
})
export class MonthlyCalendarComponent implements OnInit {
  weekdays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  currentMonth: Date = new Date();
  weeks: Date[][] = [];
  tasks: { [key: string]: string[] } = {};

  constructor() {}

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const startOfMonth: Date = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1,
    );
    const endOfMonth: Date = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0,
    );
    const startOfWeek: Date = new Date(startOfMonth);
    startOfWeek.setDate(startOfMonth.getDate() - (startOfMonth.getDay() - 1));
    const endOfWeek: Date = new Date(endOfMonth);
    endOfWeek.setDate(endOfMonth.getDate() + ((7 - endOfMonth.getDay()) % 7));
    let currentDate: Date = new Date(startOfWeek);
    const weeks: Date[][] = [];
    while (currentDate <= endOfWeek) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }
    this.weeks = weeks;
  }

  previousMonth() {
    const newMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1,
    );
    this.updateCalendar(newMonth);
  }

  nextMonth() {
    const newMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1,
    );
    this.updateCalendar(newMonth);
  }

  updateCalendar(newMonth: Date) {
    this.currentMonth = newMonth;
    this.generateCalendar();
  }

  addTask(day: Date) {
    const taskName = prompt('Enter task name');
    if (taskName) {
      const dateString = day.toDateString();
      if (!this.tasks[dateString]) {
        this.tasks[dateString] = [];
      }
      this.tasks[dateString].push(taskName);
    }
  }
}
