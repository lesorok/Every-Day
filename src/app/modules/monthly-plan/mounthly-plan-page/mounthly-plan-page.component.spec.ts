import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MounthlyPlanPageComponent } from './mounthly-plan-page.component';

describe('MounthlyPlanPageComponent', () => {
  let component: MounthlyPlanPageComponent;
  let fixture: ComponentFixture<MounthlyPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MounthlyPlanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MounthlyPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
