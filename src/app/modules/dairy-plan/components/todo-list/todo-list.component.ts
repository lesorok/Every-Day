import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TaskService } from '../../../../shared/services/task.service';
import { ITask, ITaskForm } from '../../../../shared/interface/task';
import { CategoryService } from '../../../../shared/services/category.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TaskService, CategoryService],
})
export class TodoListComponent implements OnInit {
  @Input() day = '';
  public newTaskForm!: FormGroup;
  public tasks$ = this.taskService.tasks$;
  public categories$ = this.categoryService.categories$;
  public idCheckTask: number[] = [];
  public sortCategory: string = '';
  public haveTask: boolean = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categoryService.loadCategory().subscribe();
    this.taskService.loadTasks().subscribe();
    this.taskService.tasks$
      .pipe(
        tap(tasks => {
          this.haveTask = tasks.length > 0;
        }),
      )
      .subscribe();
    this.newTaskForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
    });
  }
  ngDoCheck(): void {
    this.getCheckedTaskIds();
  }

  getCheckedTaskIds(): number[] {
    this.taskService.tasks$.subscribe(tasks => {
      // @ts-ignore
      this.idCheckTask = tasks.filter(task => task.check).map(task => task.id);
    });
    return this.idCheckTask;
  }

  newDayTask() {
    let dayTask = {
      ...this.newTaskForm.value,
      urgency: false,
      category: 'Простая',
      date: new Date(),
      check: false,
    };
    this.addItem(dayTask);
    this.newTaskForm.reset();
    this.haveTask = true;
  }

  addNewTask() {
    this.haveTask = false;
  }

  addItem(newTask: ITaskForm) {
    this.taskService.addItem(newTask);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  deleteAllTask(ids: number[]) {
    this.taskService.deleteAllTask(ids);
  }

  checkTask(updateTask: ITask) {
    this.taskService.checkTask(updateTask);
  }

  sortOnCategory(category: string) {
    if (this.sortCategory !== category) {
      this.sortCategory = category;
    }
  }

  removeFilter() {
    this.sortCategory = '';
  }
}
