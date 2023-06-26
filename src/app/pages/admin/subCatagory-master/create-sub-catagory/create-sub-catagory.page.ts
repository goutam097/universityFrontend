import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-create-sub-catagory',
  templateUrl: './create-sub-catagory.page.html',
  styleUrls: ['./create-sub-catagory.page.scss'],
})
export class CreateSubCatagoryPage implements OnInit {
  title:any;
  small_desc:any;
    logo: any;
    logoExt: any;
  masterList: any;
  rank:any
  
    constructor(
      private dataServe  : dataService,
      private alertServe : alertService,
      private router     : Router
    ) { }
  
    ngOnInit() {
      this.getmasterCatagoryApiCall();
    }

    async getmasterCatagoryApiCall() {
      await this.dataServe.getMethod('master/masterList').then(
        async (data) => {
          const res = JSON.parse(JSON.stringify(data));
          if (res?.errorNode?.errorCode == 0 && res?.success) {
            this.masterList = res?.details || [];
          } else {
            this.alertServe.presentToast(res?.serverResponse?.message);
          }
        },
        (err) => {
          this.alertServe.presentToast(err);
        }
      );
    }
  
   async submitForm(form:NgForm){
      let JsonData = {
        catagory_slug:this.rank,
          image: this.logo,
          imageExt: this.logoExt,
      }
        await this.dataServe.postMethod(JsonData,'gallery/galleryCreate').then(
          async (data) => {
            const res = JSON.parse(JSON.stringify(data));
            if (res?.errorNode?.errorCode == 0) {
              this.router.navigateByUrl("/list-sub-catagory")
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
