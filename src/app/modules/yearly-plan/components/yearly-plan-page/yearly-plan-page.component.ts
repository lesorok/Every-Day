import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yearly-plan-page',
  templateUrl: './yearly-plan-page.component.html',
  styleUrls: ['./yearly-plan-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearlyPlanPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
