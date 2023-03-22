import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogService } from 'src/app/service/blog.service';
@Component({
  selector: 'app-recent-new',
  templateUrl: './recent-new.component.html',
  styleUrls: ['./recent-new.component.css']
})
export class RecentNewComponent implements OnInit {
  @Input() deviceInfo: any;
  @Input() recent: any;
  @Input() listCategory: any;


  constructor(private datePipe: DatePipe, private blogService: BlogService) { }

  ngOnInit() {
    
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
