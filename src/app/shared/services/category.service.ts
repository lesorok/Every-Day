import { Injectable } from '@angular/core';
import { ICategory } from '../interface/category';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoriesStream$ = new BehaviorSubject<ICategory[]>([]);
  public categories$ = this.categoriesStream$.asObservable();

  constructor(private httpClient: HttpClient) {}

  loadCategory() {
    return this.httpClient
      .get<ICategory[]>('http://localhost:3000/categories')
      .pipe(tap(categories => this.categoriesStream$.next(categories)));
  }
}
