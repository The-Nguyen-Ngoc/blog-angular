import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private GET_LIST_RECENT = 'api/v1/blogs/recents';
  private API_BLOG = 'api/v1/blogs';
  private API_GET_DETAIL_BLOG = 'api/v1/blogs/detail-post/';
  private GET_LIST_CATEGORY = 'api/v1/category';

  constructor(private http: HttpClient) {


  }

  getListRecent(page: number, pageSize: number): Observable<any> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString()
    };
     return this.http.get(this.GET_LIST_RECENT, {params});
  }
  getListCategory(): Observable<any> {
     return this.http.get(this.GET_LIST_CATEGORY);
  }
  getDetailBlogById(id:any): Observable<any> {
     return this.http.get(this.API_GET_DETAIL_BLOG + id);
  }

  postPost(body: any): Observable<any>{
    return this.http.post(this.API_BLOG, body);
  }
}
