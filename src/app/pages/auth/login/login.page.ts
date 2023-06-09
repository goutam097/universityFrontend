import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  headerClass: boolean=false;
  email: any;
  password: any;
  userType: any;

  constructor(
    private dataServe: dataService,
    private alertServe: alertService,
    // private staticStorage : StaticStorageService,
    // private localStorage  : LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
  }  

  async submitLogin(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    let jsonData = {
      role: this.userType,
      email: this.email,
      password: this.password,
    };
    await this.dataServe.postMethod(jsonData, 'user/login').then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        this.alertServe.presentToast(res?.data?.message);
        if (res?.errorNode?.errorCode == 0 && res?.data?.success) {
          form.resetForm();
          if(res?.data?.details?.role == 'admin'){
            this.router.navigateByUrl('/dashboard');
          }else{
            this.router.navigateByUrl('/home');
          }
        }
      },
      (err) => {
        this.alertServe.presentToast(err?.error?.errorNode?.errorMsg);
      }
    );
  }

}
