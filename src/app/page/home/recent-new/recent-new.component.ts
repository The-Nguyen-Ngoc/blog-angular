import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-recent-new',
  templateUrl: './recent-new.component.html',
  styleUrls: ['./recent-new.component.css']
})
export class RecentNewComponent implements OnInit {
  @Input() deviceInfo: any;
  @Input() recent: any;
  content = '<h1>dfsafd</h1>'
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }
  formatDate(value: string){
    return this.datePipe.transform(value, 'dd/MM/yyyy')
  }
}
