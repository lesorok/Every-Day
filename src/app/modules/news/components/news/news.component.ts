import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../../../../shared/interface/post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  private postsStream$ = new BehaviorSubject<IPost[]>([]);
  posts$ = this.postsStream$.asObservable();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts().subscribe();
  }

  loadPosts() {
    return this.httpClient
      .get<IPost[]>('http://localhost:3000/posts')
      .pipe(tap(posts => this.postsStream$.next(posts)));
  }

  addItem(newPost: IPost) {
    console.log(newPost);
    return this.httpClient
      .post<IPost>('http://localhost:3000/posts/create', newPost)
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
}
