import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MenuItem } from 'primeng/api';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  public listCategory: any;
  public listRecent = [];
  public callApi = true;
  public deviceInfo: any;
  public searchTerm = '';
  public items: MenuItem[] = [];



  constructor(private route: ActivatedRoute, private blogService: BlogService, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.items = [
      {label:'Trang chủ', url: 'home'},
      {label:'Tìm kiếm 🔍' }
  ];
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.blogService.getListCategory().subscribe(res => {
      this.listCategory = res;
    })
    this.route.queryParams.subscribe(params => {
      const keyword = params['keyword'];
      this.searchTerm = keyword;
      if (keyword) {
        this.callApi = true;

        this.blogService.searchAll(keyword).subscribe(res => {
            this.listRecent = res;
            setTimeout(() => {
              this.callApi = false;

            }, 200);

        })
      } else {

      }
    });
  }

}
