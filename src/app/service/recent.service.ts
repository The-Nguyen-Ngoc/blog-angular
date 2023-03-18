import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecentService {

  private GET_LIST_RECENT = 'api/v1/blogs/recents';

  constructor(private http: HttpClient) {


  }

  getListRecent(page: number): Observable<any> {
     return this.http.post(this.GET_LIST_RECENT, page);
  }
}
