import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { RecentService } from 'src/app/service/recent.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public deviceInfo: any;
  public listRecent = [];
  public page = 1;
  constructor(private deviceService: DeviceDetectorService, private recentService: RecentService) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.callApiListRecent();
  }
  callApiListRecent(){
    this.recentService.getListRecent(this.page - 1).subscribe(res => {
      console.log(res)
      this.listRecent = res
    }, error => {
      console.log(error.status);
    })
  }
  nextPage(){
    this.page ++;
    this.callApiListRecent();

  }

}
