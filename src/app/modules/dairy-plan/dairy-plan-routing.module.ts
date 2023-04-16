import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DairyPlanPageComponent } from './components/dairy-plan-page/dairy-plan-page.component';

const routes: Routes = [
  {
    path: '',
    component: DairyPlanPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DairyPlanRoutingModule {}
