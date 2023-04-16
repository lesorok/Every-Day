import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
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

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent implements OnInit {
  private categoriesStream$ = new BehaviorSubject<ICategory[]>([]);
  public categories$ = this.categoriesStream$.asObservable();

  @Output() newItemEvent = new EventEmitter<ITaskForm>();
  @Output() uploadImageEvent = new EventEmitter<File>();
  newTaskForm!: FormGroup;
  // tags!: FormArray;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadCategory().subscribe();
    this.newTaskForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl(new Date()),
    });
    // this.tags = new FormArray([this.getNewTagGroup()]);
  }

  loadCategory() {
    return this.httpClient
      .get<ICategory[]>('http://localhost:3000/categories')
      .pipe(tap(categories => this.categoriesStream$.next(categories)));
  }

  addNewItem() {
    this.newItemEvent.emit({
      ...this.newTaskForm.value,
      // tags: this.tags.value,
      countLike: 0,
      date: this.newTaskForm.controls['date'].value,
    });
    this.newTaskForm.reset();
    // this.tags.reset();
  }

  uploadImage(event: any) {
    if (event.target.files && event.target.files.length) {
      const files = event.target.files;
      let file;
      for (let i = 0; i < files.length; i++) {
        file = files.item(i);
        file = files[i];
      }
      this.uploadImageEvent.emit(file);
    }
  }

  getNewTagGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  // deleteTagInput(index: number) {
  //   return this.tags.removeAt(index);
  // }

  // addNewTag() {
  //   this.tags.push(this.getNewTagGroup());
  // }
}
