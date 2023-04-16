import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITask, ITaskForm } from '../../../../shared/interface/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  private tasksStream$ = new BehaviorSubject<ITask[]>([]);
  public tasks$ = this.tasksStream$.asObservable();
  public sortCategory: string = '';
  public file: any;
  // public imageUrl: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadTasks().subscribe();
    console.log(this.tasks$);
  }

  loadTasks() {
    return this.httpClient
      .get<ITask[]>('http://localhost:3000/posts')
      .pipe(tap(tasks => this.tasksStream$.next(tasks)));
  }

  addItem(newTask: ITaskForm) {
    console.log(newTask);
    return this.httpClient
      .post<ITask>('http://localhost:3000/posts/create', {
        ...newTask,
        file: this.file,
        // imageUrl: this.imageUrl.toString(),
      })
      .pipe(switchMap(() => this.loadTasks()))
      .subscribe();
  }

  deleteTask(id: number) {
    if (confirm('Действительно удалить пост?')) {
      return this.httpClient
        .delete<ITask>(`http://localhost:3000/posts/${id}`)
        .pipe(switchMap(() => this.loadTasks()))
        .subscribe();
    }
    return;
  }

  checkTask(updateTask: ITask) {
    return this.httpClient
      .put<ITask>(`http://localhost:3000/posts/${updateTask.id}`, updateTask)
      .subscribe();
  }

  sortOnCategory(category: string) {
    if (this.sortCategory !== category) {
      this.sortCategory = category;
      console.log(this.sortCategory);
    }
  }

  removeFilter() {
    this.sortCategory = '';
  }
}
