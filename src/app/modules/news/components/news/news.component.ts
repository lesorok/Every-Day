import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  posts = [
    {
      title: '1 Пост',
      content: 'Проверка 1',
      countLike: 0,
    },
    {
      title: '2 Пост',
      content: 'Проверка 2',
      countLike: 0,
    },
    {
      title: '3 Пост',
      content: 'Проверка 3',
      countLike: 0,
    },
  ];

  constructor() {}

  like(): void {
    console.log(this.posts);
  }
  ngOnInit(): void {}
}
