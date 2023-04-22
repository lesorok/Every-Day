import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MounthlyPlanPageComponent } from './components/mounthly-plan-page/mounthly-plan-page.component';
import { MounthlyPlanRoutingModule } from './monthly-plan-routing.module';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [MounthlyPlanPageComponent],
  imports: [CommonModule, MounthlyPlanRoutingModule, MainModule],
})
export class MonthlyPlanModule {}
