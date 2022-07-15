import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IPost } from '../../../../shared/interface/post';
import { IComment } from '../../../../shared/interface/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  testComments: IComment[] = [];
  commentsThisPost: IComment[] = [];

  @Input() post: IPost | any;

  @Output() deletePostEvent = new EventEmitter<number>();
  @Output() likePostEvent = new EventEmitter<IPost>();
  @Output() sortCategoryEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.commentsThisPost = this.testComments.filter(
      comment => comment.postId === this.post.id,
    );
  }

  deletePost() {
    this.deletePostEvent.emit(this.post.id);
  }

  sortCategory() {
    this.sortCategoryEvent.emit(this.post.category);
  }

  likePost() {
    let updatePost = this.post;
    updatePost.countLike = this.post.countLike + 1;
    this.likePostEvent.emit(updatePost);
  }

  removeLikePost() {
    let updatePost = this.post;
    updatePost.countLike = this.post.countLike - 1;
    this.likePostEvent.emit(updatePost);
  }
}
