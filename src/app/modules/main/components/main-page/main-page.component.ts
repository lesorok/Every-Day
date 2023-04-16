import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  sortCategory: string = '';

  constructor() {}

  ngOnInit(): void {}
}
