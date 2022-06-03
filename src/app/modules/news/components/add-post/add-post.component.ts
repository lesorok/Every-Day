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
import { IPost } from '../../../../shared/interface/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPostComponent implements OnInit {
  public categories: ICategory[] = [
    {
      value: 'oil-0',
      name: 'Масло',
      description: 'Картины нарисованные маслом',
    },
    {
      value: 'graphic-1',
      name: 'Графика',
      description: 'Графические работы',
    },
  ];
  @Output() newItemEvent = new EventEmitter<IPost>();

  newPostForm!: FormGroup;
  tags!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newPostForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      countLike: new FormControl(0, [Validators.required]),
    });
    this.tags = new FormArray([this.getNewTagGroup()]);
  }

  addNewItem() {
    this.newItemEvent.emit({
      ...this.newPostForm.value,
      tags: this.tags.value,
    });
  }

  addNewTag() {
    this.tags.push(this.getNewTagGroup());
  }

  getNewTagGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  deleteTagInput(id: number) {
    return this.tags.removeAt(id);
  }
}
