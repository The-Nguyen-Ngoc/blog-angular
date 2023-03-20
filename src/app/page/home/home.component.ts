import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BlogService } from 'src/app/service/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public deviceInfo: any;
  public listRecent = [];
  public page = 1;
  public pageSize = 5;
  public totalPage = 0;
  public totalE = 0;
  public listCategory: any;

  constructor(private deviceService: DeviceDetectorService, private blogService: BlogService, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.blogService.getListCategory().subscribe(res => {
      this.listCategory = res;
    })
    this.route.queryParams.subscribe(params => {
      const page = params['page'];
      if (page) {
        this.page = page;
        this.callApiListRecent(page);

      } else {
        this.redirectToPageWithParams(this.page.toString())
      }
    });
  }
  callApiListRecent(page: number) {
    this.blogService.getListRecent(page, this.pageSize).subscribe((res)=> {
      console.log(res)
      this.listRecent = res.recentDtoList;
      this.totalPage = res.totalPages;
      this.totalE = res.totalElement;
    })
  }
  redirectToPageWithParams(page: string) {
    const params = { page: page };
    this.router.navigate(['home'], { queryParams: params });
  }
  nextPage() {
    if (this.page < this.totalPage) {
      this.page++;
      this.redirectToPageWithParams(this.page.toString());
    }
  }
  previousPage() {
    if (this.page > 1) {
      this.page--
      this.redirectToPageWithParams(this.page.toString());
    }

  }

}
