import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { CourseComponent } from './page/course/course.component';
import { PostsComponent } from './page/posts/posts.component';
import { AboutComponent } from './page/about/about.component';

//Khai báo một constant chứa các route của app
const routes: Routes = [
  // { path: '', component: PageComponentComponent },
  // { path: 'contact', component: ContactComponentComponent },
  // { path: 'product', component: ProductComponentComponent },
  { path: '', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'cart', component: CartComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
