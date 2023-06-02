import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  headerClass: boolean = false;
  uname: any;
  password: any;
  email: any;
  cPass: any;
  userType: any;
  constructor(
    private dataServe: dataService,
    private alertServe: alertService,
    // private staticStorage : StaticStorageService,
    // private localStorage  : LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {}

  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
  }

  async submitRegister(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    let jsonData = {
      role: this.userType,
      name: this.uname,
      email: this.email,
      password: this.password,
      confirmPassword: this.cPass,
    };
    await this.dataServe.postMethod(jsonData, 'user/register').then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        this.alertServe.presentToast(res?.data?.message);
        if (res?.errorNode?.errorCode == 0 && res?.data?.success) {
          form.resetForm();
          this.router.navigateByUrl('/login');
        }
      },
      (err) => {
        this.alertServe.presentToast(err?.error?.errorNode?.errorMsg);
      }
    );
  }
}
