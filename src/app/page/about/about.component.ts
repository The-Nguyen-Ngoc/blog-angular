import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public items: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Trang chủ', url: 'home'},
      {label:'Tác giả' }
  ];
  }

}
