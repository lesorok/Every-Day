import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyPlanRoutingModule } from './weekly-plan-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { WeeklyPlanPageComponent } from './components/weekly-plan-page/weekly-plan-page.component';
import { WeekComponent } from './components/week/week.component';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [WeeklyPlanPageComponent, WeekComponent],
  imports: [CommonModule, WeeklyPlanRoutingModule, MatRippleModule, MainModule],
  exports: [],
})
export class WeeklyPlanModule {}
