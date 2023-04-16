import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DairyPlanPageComponent } from './components/dairy-plan-page/dairy-plan-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MainModule } from '../main/main.module';
import { MatButtonModule } from '@angular/material/button';
import { DairyPlanRoutingModule } from './dairy-plan-routing.module';

@NgModule({
  declarations: [DairyPlanPageComponent, TodoListComponent],
  imports: [CommonModule, DairyPlanRoutingModule, MainModule, MatButtonModule],
})
export class DairyPlanModule {}
