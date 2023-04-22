import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-tracer',
  templateUrl: './habit-tracer.component.html',
  styleUrls: ['./habit-tracer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitTracerComponent implements OnInit {
  habits: { name: string; dates: Date[] }[] = [];

  newHabitName: string = '';

  daysInMonth: number;
  month: number;
  year: number;
  days: number[];
  crossedOutDays: number[];

  constructor() {
    const today = new Date();
    this.month = today.getMonth() + 1;
    this.year = today.getFullYear();
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();
    this.days = Array.from({ length: this.daysInMonth }, (_, i) => i + 1);
    this.crossedOutDays = []; // Start with an empty array of crossed out days
  }

  ngOnInit(): void {}

  createNewHabit() {
    const newHabit = {
      name: this.newHabitName,
      dates: [],
    };
    this.habits.push(newHabit);
    console.log(newHabit);
    this.newHabitName = '';
  }

  toggleDate(habit: { name: string; dates: Date[] }, date: Date) {
    if (habit.dates.includes(date)) {
      habit.dates = habit.dates.filter(d => d !== date);
    } else {
      habit.dates.push(date);
    }
    console.log(habit);
  }
}
