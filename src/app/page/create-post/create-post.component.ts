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
  spellcheck: true,
  height: 'auto',
  minHeight: '0',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    { class: 'arial', name: 'Arial' },
    { class: 'times-new-roman', name: 'Times New Roman' },
    { class: 'calibri', name: 'Calibri' },
    { class: 'comic-sans-ms', name: 'Comic Sans MS' }
  ],
  customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  sanitize: false
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
      title: this.title,
      header: this.header,
      body: this.body,
      categoryId: this.selectedOption,
      userCreate: this.userCreate
    }
    console.log((this.body).toString());
    
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
