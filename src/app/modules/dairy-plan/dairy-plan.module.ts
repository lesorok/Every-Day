import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DairyPlanPageComponent } from './components/dairy-plan-page/dairy-plan-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MainModule } from '../main/main.module';
import { MatButtonModule } from '@angular/material/button';
import { DairyPlanRoutingModule } from './dairy-plan-routing.module';
import { TimerComponent } from './components/timer/timer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTimeTaskComponent } from './components/add-time-task/add-time-task.component';
import { MatIconModule } from '@angular/material/icon';
import { DateNowComponent } from './components/date-now/date-now.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { TimeComponent } from './components/time/time.component';

@NgModule({
  declarations: [
    DairyPlanPageComponent,
    TodoListComponent,
    TimerComponent,
    AddTimeTaskComponent,
    DateNowComponent,
    WeatherReportComponent,
    TimeComponent,
  ],
  imports: [
    CommonModule,
    DairyPlanRoutingModule,
    MainModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class DairyPlanModule {}
