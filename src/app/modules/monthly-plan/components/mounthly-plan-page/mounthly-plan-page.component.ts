import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mounthly-plan-page',
  templateUrl: './mounthly-plan-page.component.html',
  styleUrls: ['./mounthly-plan-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MounthlyPlanPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
