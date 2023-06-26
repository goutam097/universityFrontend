import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-master-create-catagory',
  templateUrl: './master-create-catagory.page.html',
  styleUrls: ['./master-create-catagory.page.scss'],
})
export class MasterCreateCatagoryPage implements OnInit {
title:any;
small_desc:any;
  logo: any;
  logoExt: any;

  constructor(
    private dataServe  : dataService,
    private alertServe : alertService,
    private router     : Router
  ) { }

  ngOnInit() {
  }

 async submitForm(form:NgForm){
    let JsonData = {
        title: this.title,
        small_description: this.small_desc,
        logo: this.logo,
        logoExt: this.logoExt,
    }
      await this.dataServe.postMethod(JsonData,'master/masterCreate').then(
        async (data) => {
          const res = JSON.parse(JSON.stringify(data));
          if (res?.errorNode?.errorCode == 0) {
            this.router.navigateByUrl("/master-catagory-list")
          }
           else {
            this.alertServe.presentToast(res?.serverResponse?.message);
          }
        },
        (err) => {
          this.alertServe.presentToast(err);
        }
      );
  }


  yourImage(ev:any, type:any) {
    let file = ev.files[0];
    console.log(file);
    if (file) {
      if (file.type == 'image/jpeg' || file.type == 'image/png') {
        if (file.size < 2100000) {
          let reader = new FileReader();
          reader.onloadend = (e) => {
            this.logo = reader.result;
            this.logoExt = file.name.split('.').pop();
          };
          reader.readAsDataURL(file);
        } 
      }
    }
  }

  clearInvoiceImage() {
    this.logo = null;
    this.logoExt = null;
  }

}
