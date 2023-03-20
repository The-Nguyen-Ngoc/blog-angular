import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public listCategory: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getListCategory().subscribe(res => {
      this.listCategory = res;
    })
  }

}
