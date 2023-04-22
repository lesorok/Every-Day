import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FilterCategoriesPipe } from './components/pipes/filter-categories.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MonthlyCalendarComponent } from './components/monthly-calendar/monthly-calendar.component';
import { HabitTracerComponent } from './components/habit-tracer/habit-tracer.component';
import { ChunkPipe } from './components/pipes/chunk.pipe';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { MatRippleModule } from '@angular/material/core';
import { TaskDateFilterPipe } from './components/pipes/task-date-filter.pipe';
import { TimerFormatPipe } from './components/pipes/timer-format.pipe';

@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent,
    CategoriesComponent,
    CategoryComponent,
    MainPageComponent,
    FilterCategoriesPipe,
    MonthlyCalendarComponent,
    HabitTracerComponent,
    ChunkPipe,
    TaskDateFilterPipe,
    TimerFormatPipe,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatRippleModule,
  ],
  exports: [
    TaskComponent,
    AddTaskComponent,
    FilterCategoriesPipe,
    MonthlyCalendarComponent,
    HabitTracerComponent,
    TaskDateFilterPipe,
  ],
  providers: [],
})
export class MainModule {}
