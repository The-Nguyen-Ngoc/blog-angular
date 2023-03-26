import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MenuItem } from 'primeng/api';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent implements OnInit {
  public listCategory: any;
  public listRecent = [];
  public deviceInfo: any;
  public id = '';
  public categoryName = '';
  public page = 1;
  public pageSize = 5;
  public totalPage = 0;
  public totalE = 0;
  public callApi = true;
 public items: MenuItem[] = [];


  constructor(private router: Router, private route: ActivatedRoute, private blogService: BlogService, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    
    this.deviceInfo = this.deviceService.getDeviceInfo();

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
      const page = params['page'];
      this.page = page;
      if (id) {
        this.blogService.getListCategory().subscribe(res => {
          this.listCategory = res;
          this.listCategory.forEach((i: { id: any; name: string; }) => {
            if (i.id == id) {
              this.categoryName = i.name
              this.items = [
                {label:'Trang chủ', url: 'home'},
                {label:'Bài viết', url: 'posts' },
                {label:this.categoryName}]
            }

          })
        })
        this.callApi = true;
        this.blogService.getListPostByCategoryId(id, page).subscribe(res => {
          if (res) {
            setTimeout(() => {
              this.callApi = false;
            }, 200);
            this.listRecent = res.recentDtoList;
            this.totalPage = res.totalPages;
            this.totalE = res.totalElement;
           
          }
        })
      }
    });
  }

  redirectToPageWithParams(page: string, oldPage: string) {
    let url = 'posts/'+ this.id + '/' + page;
    this.router.navigate([url]);
    this.scrollToTop()
  }

  nextPage() {
    const oldPage = this.page;
    if (this.page < this.totalPage) {
      this.page++;
      this.redirectToPageWithParams(this.page.toString(), oldPage.toString());
    }
  }
  previousPage() {
    const oldPage = this.page;
    if (this.page > 1) {
      this.page--
      this.redirectToPageWithParams(this.page.toString(), oldPage.toString());
    }

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
