import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ITask } from '../../../../shared/interface/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() task: ITask | any;

  @Output() checkTaskEvent = new EventEmitter<ITask>();
  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() sortCategoryEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteTask() {
    this.deleteTaskEvent.emit(this.task.id);
  }

  sortCategory() {
    this.sortCategoryEvent.emit(this.task.category);
  }

  checkTask() {
    let updateTask = this.task;
    updateTask.check = !this.task.check;
    this.checkTaskEvent.emit(updateTask);
  }
}
