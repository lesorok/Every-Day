import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyPlanPageComponent } from './components/weekly-plan-page/weekly-plan-page.component';

const routes: Routes = [
  {
    path: '',
    component: WeeklyPlanPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyPlanRoutingModule {}
