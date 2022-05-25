import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { NewsRoutingModule } from './news-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [NewsComponent, PostComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class NewsModule {}
