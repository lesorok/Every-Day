import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        m => m.CategoriesModule,
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./modules/news/news.module').then(m => m.NewsModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'news' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
