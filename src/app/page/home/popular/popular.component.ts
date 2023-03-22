import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  @Input() listPopularRecent: any;
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }
  formatDate(value: string){
    return this.datePipe.transform(value, 'dd \'tháng\' MM\',\' yyyy')
  }
}
