import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../shared/services/task.service';

@Component({
  selector: 'app-monthly-calendar',
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TaskService],
})
export class MonthlyCalendarComponent implements OnInit {
  public tasks$ = this.taskService.tasks$;
  public sortCategory: string = 'Важная';
  public weekdays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  public currentMonth: Date = new Date();
  public weeks: Date[][] = [];
  // tasks: { [key: string]: string[] } = {};

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.generateCalendar();
    this.taskService.loadTasks().subscribe();
    console.log(this.tasks$);
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
    // const taskName = prompt('Enter task name');
    // if (taskName) {
    //   const dateString = day.toDateString();
    //   if (!this.tasks[dateString]) {
    //     this.tasks[dateString] = [];
    //   }
    //   this.tasks[dateString].push(taskName);
    // }
  }
}
