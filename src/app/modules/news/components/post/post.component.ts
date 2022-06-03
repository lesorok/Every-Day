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

  constructor() {}

  ngOnInit(): void {}

  deletePost(id: number) {
    this.deletePostEvent.emit(id);
  }
}
