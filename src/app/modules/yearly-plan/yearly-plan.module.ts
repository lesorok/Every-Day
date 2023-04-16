import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearlyPlanPageComponent } from './components/yearly-plan-page/yearly-plan-page.component';
import { YearlyPlanRoutingModule } from './yearly-plan-routing.module';

@NgModule({
  declarations: [YearlyPlanPageComponent],
  imports: [CommonModule, YearlyPlanRoutingModule],
})
export class YearlyPlanModule {}
