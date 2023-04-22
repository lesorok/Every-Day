import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {
  public timerStarted = false;
  public minutes = 0;
  public seconds: any = 20;
  public timer: any;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  startTimer(): void {
    this.timerStarted = true;
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }

      if (this.minutes === 0 && this.seconds === 0) {
        this.stopTimer();
        this.minutes = 5;
        this.seconds = 0;
      }
      this.cdRef.detectChanges();
    }, 1000);
  }

  stopTimer(): void {
    this.timerStarted = false;
    clearInterval(this.timer);
  }

  clearTimer(): void {
    this.stopTimer();
    this.minutes = 25;
    this.seconds = 0;
  }
}
