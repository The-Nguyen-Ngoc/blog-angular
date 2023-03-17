import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependentComponent } from './page/dependent/dependent.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { CourseComponent } from './page/course/course.component';
import { PostsComponent } from './page/posts/posts.component';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DependentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent,
    PostsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
