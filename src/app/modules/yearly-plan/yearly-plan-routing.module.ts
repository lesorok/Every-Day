import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearlyPlanPageComponent } from './components/yearly-plan-page/yearly-plan-page.component';

const routes: Routes = [
  {
    path: '',
    component: YearlyPlanPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearlyPlanRoutingModule {}
