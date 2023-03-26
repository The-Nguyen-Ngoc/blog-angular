import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public email = '';
  public ip = '';
  public disableButton = false;

  constructor(private blogService: BlogService, private messageService: MessageService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.ipify.org?format=json').subscribe((res: any) => {
      if (res) {
        this.ip = res.ip
      }

    });

  }
  submit() {
    if (this.isValidEmail(this.email)) {
      let body = {
        emailTo: this.email,
        ip: this.ip
      }
      this.blogService.sendMail(body).subscribe(res => {
        this.disableButton = true;
        if (res) {
          localStorage.setItem('email', this.email);
          this.messageService.add({ severity: 'success', summary: 'Gửi email thành công!', detail: 'Bạn sẽ là một trong những người sớm nhất nhận được thông tin trên trang của chúng tôi.' });
        }
      })

    }
  }

  isValidEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  // isValidEmailDuplicate(email: string) {
  //   const emailLocal = localStorage.getItem('email');
  //   return emailLocal === email;
  // }


}
