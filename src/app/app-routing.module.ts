import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { CourseComponent } from './page/course/course.component';
import { PostsComponent } from './page/posts/posts.component';
import { AboutComponent } from './page/about/about.component';
import { CreatePostComponent } from './page/create-post/create-post.component';
import { DetailPostComponent } from './page/home/detail-post/detail-post.component';
import { CategoryPostComponent } from './page/posts/category-post/category-post.component';

//Khai báo một constant chứa các route của app
const routes: Routes = [

  { path: 'home', component: HomeComponent , pathMatch: 'full'},
  { path: 'course', component: CreatePostComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: CategoryPostComponent },
  { path: 'detail-post/:id', component: DetailPostComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
