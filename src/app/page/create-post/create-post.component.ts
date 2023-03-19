import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
 public title = '';
 public header = '';
 public body = '';
 public userCreate = '';
 public listCategory = [];
 selectedOption = 0;

 editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: false,
  height: 'auto',
  minHeight: '150px',
  maxHeight: '500px',
  width: 'auto',
  minWidth: '50%',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
};
  constructor(private blogService: BlogService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.blogService.getListCategory().subscribe(res => {
      this.listCategory = res;
      this.selectedOption = this.listCategory[0]['id'];
    })
  }

  savePost(){
    let body = {
      title: this.sanitizer.bypassSecurityTrustHtml(this.title,).toString(),
      header: this.sanitizer.bypassSecurityTrustHtml(this.header).toString(),
      body: this.sanitizer.bypassSecurityTrustHtml(this.body).toString(),
      categoryId: this.selectedOption,
      userCreate: this.userCreate
    }
    console.log(this.sanitizer.bypassSecurityTrustHtml(this.body).toString());
    
    this.blogService.postPost(body).subscribe(res=>{
      if(res){
        this.title = '',
        this.header = '',
        this.body = '',
        this.selectedOption = this.listCategory[0]['id'],
        this.userCreate = ''
      }
    })
  }
}
