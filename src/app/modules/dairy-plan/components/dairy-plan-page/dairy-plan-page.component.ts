import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ITask, ITaskForm } from '../../../../shared/interface/task';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dairy-plan-page',
  templateUrl: './dairy-plan-page.component.html',
  styleUrls: ['./dairy-plan-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DairyPlanPageComponent implements OnInit {
  public newMainTaskForm!: FormGroup;
  public selectedDate = new Date();
  public mainTask: ITask | undefined;
  @Output() addMainTaskEvent = new EventEmitter<ITaskForm>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newMainTaskForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
    });
  }

  addMainTask() {
    this.addMainTaskEvent.emit({
      ...this.newMainTaskForm.value,
      category: 'Важная',
      date: this.selectedDate,
    });
    this.newMainTaskForm.reset();
  }
}
