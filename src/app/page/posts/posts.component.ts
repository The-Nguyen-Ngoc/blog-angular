import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public listCategory: any;
  public callApi = true;
  public items: MenuItem[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.items = [
      {label:'Trang chủ', url: 'home'},
      {label:'Bài viết' }
  ];
    this.blogService.getListCategoryParent().subscribe(res => {
      if (res) {
        this.listCategory = res;
        this.listCategory.forEach((element: any ) => {
          element.showChildren = true;
          
        });
        console.log(this.listCategory)
        setTimeout(() => {
          this.callApi = false;
        }, 200);
      }
    })
  }
  toggleChildren(value:any){
    value.showChildren = !value.showChildren;
  }

}
