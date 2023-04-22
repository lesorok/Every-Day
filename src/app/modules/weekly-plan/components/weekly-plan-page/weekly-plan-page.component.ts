import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-plan-page',
  templateUrl: './weekly-plan-page.component.html',
  styleUrls: ['./weekly-plan-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeeklyPlanPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
