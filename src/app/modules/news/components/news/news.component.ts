import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, filter, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost, IPostForm } from '../../../../shared/interface/post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  private postsStream$ = new BehaviorSubject<IPost[]>([]);
  public posts$ = this.postsStream$.asObservable();
  public sortCategory: string = '';
  public file: any;
  // public imageUrl: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts().subscribe();
  }

  loadPosts() {
    return this.httpClient
      .get<IPost[]>('http://localhost:3000/posts')
      .pipe(tap(posts => this.postsStream$.next(posts)));
  }

  addItem(newPost: IPostForm) {
    console.log(newPost);
    return this.httpClient
      .post<IPost>('http://localhost:3000/posts/create', {
        ...newPost,
        file: this.file,
        // imageUrl: this.imageUrl.toString(),
      })
      .pipe(switchMap(() => this.loadPosts()))
      .subscribe();
  }

  deletePost(id: number) {
    if (confirm('Действительно удалить пост?')) {
      return this.httpClient
        .delete<IPost>(`http://localhost:3000/posts/${id}`)
        .pipe(switchMap(() => this.loadPosts()))
        .subscribe();
    }
    return;
  }

  likePost(updatePost: IPost) {
    return this.httpClient
      .put<IPost>(`http://localhost:3000/posts/${updatePost.id}`, updatePost)
      .subscribe();
  }

  sortOnCategory(category: string) {
    if (this.sortCategory !== category) {
      this.sortCategory = category;
      console.log(this.sortCategory);
    }
  }

  removeFilter() {
    this.sortCategory = '';
  }

  uploadFile(file: File) {
    // const formData = new FormData();
    // formData.append('image', file);
    // this.file = formData;
    // console.log(this.file);
  }
}
