import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../../shared/services/task.service';

@Component({
  selector: 'app-add-time-task',
  templateUrl: './add-time-task.component.html',
  styleUrls: ['./add-time-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TaskService],
})
export class AddTimeTaskComponent implements OnInit {
  public newTaskForm!: FormGroup;
  public tasks$ = this.taskService.tasks$;

  constructor(private taskService: TaskService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe();
    this.newTaskForm = this.fb.group({
      id: new FormControl(0, [Validators.required]),
    });
  }

  addTime() {
    let taskTime = {
      ...this.newTaskForm.value,
    };
    console.log(taskTime);
    // this.taskService.checkTask(taskTime);
  }
}
