import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsComponent } from './components/news/news.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostsService } from './service/posts.service';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { CategoriesModule } from '../categories/categories.module';
import { FilterCategoriesPipe } from './components/pipes/filter-categories.pipe';

@NgModule({
  declarations: [
    NewsComponent,
    PostComponent,
    AddPostComponent,
    CommentsComponent,
    NewsPageComponent,
    FilterCategoriesPipe,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    CategoriesModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
  ],
  exports: [PostComponent],
  providers: [PostsService],
})
export class NewsModule {}
