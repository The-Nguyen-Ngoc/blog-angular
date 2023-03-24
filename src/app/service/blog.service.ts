import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private GET_LIST_RECENT = 'api/v1/blogs/recents';
  private API_BLOG = 'api/v1/blogs';
  private API_GET_POST_BY_CATEGORY_ID = 'api/v1/blogs/posts/';
  private API_GET_DETAIL_BLOG = 'api/v1/blogs/detail-post/';
  private API_GET_5_POPULAR = 'api/v1/blogs/popular';
  private API_SEARCH_ALL = 'api/v1/blogs/search';
  private GET_LIST_CATEGORY = 'api/v1/category';
  private GET_LIST_CATEGORY_PARENT = 'api/v1/category/parent';

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
  getListCategoryParent(): Observable<any> {
     return this.http.get(this.GET_LIST_CATEGORY_PARENT);
  }
  getDetailBlogById(id:any): Observable<any> {
     return this.http.get(this.API_GET_DETAIL_BLOG + id);
  }
  getListPostByCategoryId(id:any, page:any): Observable<any> {
     return this.http.get(this.API_GET_POST_BY_CATEGORY_ID + id +'/' + page);
  }
  getList5Popular(): Observable<any> {
     return this.http.get(this.API_GET_5_POPULAR );
  }
  searchAll(keyword: string): Observable<any> {
    const params = {
      keyword: keyword.toString().trim()
    };
     return this.http.get(this.API_SEARCH_ALL, {params} );
  }

  postPost(body: any): Observable<any>{
    return this.http.post(this.API_BLOG, body);
  }
}
