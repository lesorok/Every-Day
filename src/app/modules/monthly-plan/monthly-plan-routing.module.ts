import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MounthlyPlanPageComponent } from './mounthly-plan-page/mounthly-plan-page.component';

const routes: Routes = [
  {
    path: '',
    component: MounthlyPlanPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyPlanRoutingModule {}
