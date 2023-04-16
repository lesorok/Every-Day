import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'dairy-plan',
    loadChildren: () =>
      import('./modules/dairy-plan/dairy-plan.module').then(
        m => m.DairyPlanModule,
      ),
  },
  {
    path: 'weekly-plan',
    loadChildren: () =>
      import('./modules/weekly-plan/weekly-plan.module').then(
        m => m.WeeklyPlanModule,
      ),
  },
  {
    path: 'monthly-plan',
    loadChildren: () =>
      import('./modules/monthly-plan/monthly-plan.module').then(
        m => m.MonthlyPlanModule,
      ),
  },
  {
    path: 'yearly-plan',
    loadChildren: () =>
      import('./modules/yearly-plan/yearly-plan.module').then(
        m => m.YearlyPlanModule,
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
