import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ICategory } from '../../../../shared/interface/category';
import { ITaskForm } from '../../../../shared/interface/task';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../../shared/services/category.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoryService],
})
export class AddTaskComponent implements OnInit {
  public categories$ = this.categoryService.categories$;
  public newTaskForm!: FormGroup;
  public selectedDate = new Date();
  @Output() newItemEvent = new EventEmitter<ITaskForm>();

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categoryService.loadCategory().subscribe();
    this.newTaskForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('Тип задачи...', [Validators.required]),
      date: new FormControl(this.selectedDate, [Validators.required]),
    });
  }

  addNewItem() {
    this.newItemEvent.emit({
      ...this.newTaskForm.value,
      urgency: false,
      check: false,
    });
    this.newTaskForm.reset();
  }

  getNewTagGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
}
