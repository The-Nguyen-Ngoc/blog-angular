import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
})
export class DetailPostComponent implements OnInit {
  public post : any
  public idPost = '';
 public listCategory: any;
 public callApi = true;
 public items: MenuItem[] = [];


  constructor(private router: Router,
    private route: ActivatedRoute, private datePipe: DatePipe, private blogService: BlogService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
   
    this.blogService.getListCategory().subscribe(res => {
      this.listCategory = res;
    })
    this.route.params.subscribe(params => {
      if(params && params['id']){
        this.callApi = true;
        this.blogService.getDetailBlogById(params['id']).subscribe(res =>{
          if(res){
            this.post = res;
            this.items = [
              {label:'Trang chủ', url: 'home'},
              {label:'Bài viết', url: 'posts' },
              {label:this.convertNameCategory(this.post.categoryId) },
          ];
            setTimeout(() => {
              this.callApi = false;
    
            }, 200);
          }
          
        })
      }
    });
  }
  byPassHtml(html: string){
    return this.sanitizer.bypassSecurityTrustHtml(html).toString();
  }
  formatDate(value: string){
    return this.datePipe.transform(value, 'dd \'tháng\' MM\',\' yyyy')

  }
  convertNameCategory(idCategory: number){
    const user = this.listCategory.find((u: { id: number; }) => u.id === idCategory);
    const userName = user?.name;
    return userName // output: Bob
  }

}
