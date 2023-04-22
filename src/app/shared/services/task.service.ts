import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { ITask, ITaskForm } from '../interface/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasksStream$ = new BehaviorSubject<ITask[]>([]);
  public tasks$ = this.tasksStream$.asObservable();
  public idCheckTask: number[] = [];

  constructor(private httpClient: HttpClient) {}

  loadTasks() {
    return this.httpClient.get<ITask[]>('http://localhost:3000/posts').pipe(
      tap(tasks => {
        this.tasksStream$.next(tasks);
      }),
    );
  }

  addItem(newTask: ITaskForm) {
    return this.httpClient
      .post<ITask>('http://localhost:3000/posts/create', {
        ...newTask,
      })
      .pipe(switchMap(() => this.loadTasks()))
      .subscribe();
  }

  loadTaskById(id: number) {
    return this.httpClient.get<ITask>(`http://localhost:3000/posts/${id}`).pipe(
      tap(task => {
        this.tasksStream$.next(task);
      }),
    );
  }

  deleteTask(id: number) {
    if (confirm('Действительно удалить задачи?')) {
      return this.httpClient
        .delete<ITask>(`http://localhost:3000/posts/${id}`)
        .pipe(switchMap(() => this.loadTasks()))
        .subscribe();
    }
    return;
  }

  deleteAllTask(ids: number[]) {
    if (confirm('Действительно удалить задачу?')) {
      return this.httpClient
        .delete<number[]>(`http://localhost:3000/posts/${ids}`)
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
}
