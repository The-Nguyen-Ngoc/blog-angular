import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public deviceInfo: any;
  public displayMenuMobile = false;
  public textSearch = '';
  public navs = [
    {
      name: 'Trang chủ',
      link: 'home',
    },
    {
      name: 'Khóa học',
      link: 'course',
    },
    {
      name: 'Bài viết',
      link: 'posts',
    },
    {
      name: 'Tác giả',
      link: 'about',
    },
  ]
  constructor(private deviceService: DeviceDetectorService, private router: Router) { }

  navigateResultSearch(){
    this.router.navigate(['search'], { queryParams: {keyword: this.textSearch}});
  }
  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  showHideMenuMobile() {
    this.displayMenuMobile = !this.displayMenuMobile
  }


}
