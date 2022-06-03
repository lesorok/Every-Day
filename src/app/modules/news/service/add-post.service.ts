import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../../../shared/interface/post';

@Injectable({
  providedIn: 'root',
})
export class AddPostService {
  constructor(private http: HttpClient) {}

  addPost(post: IPost) {
    return this.http.post('/api/post/create', {
      title: post.title,
      author: post.author,
      img: post.img,
      category: post.category,
      tags: post.tags,
      countLike: post.countLike,
    });
  }
}
