import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IPost } from '../../../../shared/interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  @Input() post: IPost | any;
  @Output() deletePostEvent = new EventEmitter<number>();
  @Output() likePostEvent = new EventEmitter<IPost>();
  constructor() {}

  ngOnInit(): void {}

  deletePost() {
    this.deletePostEvent.emit(this.post.id);
  }

  likePost() {
    //здесь надо добавить проверку на пользователя, а пока можно лайкать до бесконечности :Т
    let updatePost = this.post;
    updatePost.countLike = this.post.countLike + 1;
    this.likePostEvent.emit(updatePost);
  }
}
