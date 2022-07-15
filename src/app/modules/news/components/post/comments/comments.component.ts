import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IComment } from '../../../../../shared/interface/comment';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
  newComment!: FormGroup;
  changeComment!: FormGroup;

  @Input() commentsPost: IComment | any;

  updateComments: IComment | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newComment = this.fb.group({
      content: new FormControl('', [Validators.required]),
    });
    this.changeComment = this.fb.group({
      content: new FormControl('', [Validators.required]),
    });
  }

  addNewComment() {
    this.commentsPost.push({
      ...this.newComment.value,
      id: this.commentsPost.length,
      author: '',
      countLike: 0,
      changeRequest: false,
    });
    this.newComment.reset();
  }

  likeComment(id: number) {
    return this.commentsPost.map(
      (comment: { id: number; countLike: number }) => {
        if (comment.id === id && !comment.countLike) {
          comment.countLike++;
        }
      },
    );
  }

  updateChangeRequest(id: number) {
    return this.commentsPost.map(
      (comment: { changeRequest: boolean; id: number }) => {
        if (comment.id === id) {
          comment.changeRequest = !comment.changeRequest;
        }
      },
    );
  }

  updateComment(id: number) {
    if (this.changeComment.value.content) {
      return this.commentsPost.map(
        (comment: { content: any; changeRequest: boolean; id: number }) => {
          if (comment.id === id) {
            comment.content = this.changeComment.value.content;
            this.changeComment.reset();
            comment.changeRequest = false;
          }
        },
      );
    }
  }

  deleteComment(id: number) {
    this.updateComments = this.commentsPost.filter(
      (comment: { id: number }) => comment.id !== id,
    );
    this.commentsPost = this.updateComments;
  }
}
