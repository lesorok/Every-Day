import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  public categories = [
    { id: 1, name: 'День', link: 'dairy-plan' },
    { id: 2, name: 'Неделю', link: 'weekly-plan' },
    { id: 3, name: 'Месяц', link: 'monthly-plan' },
    { id: 4, name: 'Год', link: 'yearly-plan' },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCategory() {}
}
