import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITaskForm } from '../../../../shared/interface/task';
import { TaskService } from '../../../../shared/services/task.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TaskService],
})
export class MainPageComponent implements OnInit {
  sortCategory: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addItem(newTask: ITaskForm) {
    this.taskService.addItem(newTask);
  }
}
