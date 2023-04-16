import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitTracerComponent } from './habit-tracer.component';

describe('HabitTracerComponent', () => {
  let component: HabitTracerComponent;
  let fixture: ComponentFixture<HabitTracerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitTracerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitTracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
