import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ICategory } from '../../../../shared/interface/category';
import { IPost, IPostForm } from '../../../../shared/interface/post';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPostComponent implements OnInit {
  private categoriesStream$ = new BehaviorSubject<ICategory[]>([]);
  public categories$ = this.categoriesStream$.asObservable();

  @Output() newItemEvent = new EventEmitter<IPostForm>();
  @Output() uploadImageEvent = new EventEmitter<File>();
  newPostForm!: FormGroup;
  tags!: FormArray;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadCategory().subscribe();
    this.newPostForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
    this.tags = new FormArray([this.getNewTagGroup()]);
  }

  loadCategory() {
    return this.httpClient
      .get<ICategory[]>('http://localhost:3000/categories')
      .pipe(tap(categories => this.categoriesStream$.next(categories)));
  }

  addNewItem() {
    this.newItemEvent.emit({
      ...this.newPostForm.value,
      tags: this.tags.value,
      author: 'test',
      countLike: 0,
    });
    this.newPostForm.reset();
    this.tags.reset();
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

  addNewTag() {
    this.tags.push(this.getNewTagGroup());
  }

  getNewTagGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  deleteTagInput(index: number) {
    return this.tags.removeAt(index);
  }
}
