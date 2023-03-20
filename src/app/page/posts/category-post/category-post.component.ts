import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
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
  constructor(private route: ActivatedRoute, private blogService: BlogService, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.blogService.getListCategory().subscribe(res => {
          this.listCategory = res;
          this.listCategory.forEach((i: { id: any; name: string; }) => {
            if(i.id == id){
              this.categoryName =  i.name
              console.log(this.categoryName)
            }
            
        })
        })
        this.blogService.getListPostByCategoryId(id).subscribe(res => {
          if (res) {
            this.listRecent = res;
          }
        })
      }
    });
  }


}
