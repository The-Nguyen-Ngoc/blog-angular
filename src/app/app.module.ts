import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {SidebarModule} from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BreadcrumbModule} from 'primeng/breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependentComponent } from './page/dependent/dependent.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { CourseComponent } from './page/course/course.component';
import { PostsComponent } from './page/posts/posts.component';
import { AboutComponent } from './page/about/about.component';
import { RecentNewComponent } from './page/home/recent-new/recent-new.component';
import { FollowComponent } from './page/home/follow/follow.component';
import { CreatePostComponent } from './page/create-post/create-post.component';
import { DetailPostComponent } from './page/home/detail-post/detail-post.component';
import { CategoryPostComponent } from './page/posts/category-post/category-post.component';
import { PopularComponent } from './page/home/popular/popular.component';
import { ResultSearchComponent } from './page/result-search/result-search.component';


import { DatePipe } from '@angular/common';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { HighlightPipe } from './pipe/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DependentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent,
    PostsComponent,
    AboutComponent,
    RecentNewComponent,
    FollowComponent,
    CreatePostComponent,
    DetailPostComponent,
    CategoryPostComponent,
    PopularComponent,
    ResultSearchComponent,
    SafeHtmlPipe,
    HighlightPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FormsModule,
    MenubarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FontAwesomeModule,
    AngularEditorModule,
    ProgressSpinnerModule,
    BreadcrumbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
