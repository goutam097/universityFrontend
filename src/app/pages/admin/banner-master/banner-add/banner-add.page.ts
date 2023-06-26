import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.page.html',
  styleUrls: ['./banner-add.page.scss'],
})
export class BannerAddPage implements OnInit {
  bannerTitle: any;
  bannerHeading: any;
  bannerSmallDesc: any;
  status: any = 'No';
  bannerLngDesc: any;
  bannerImage: any = { file: '', filename: '' };
  title: any = 'Create';
  imageName: any;
  image_ext: any;


  constructor(
    private dataServe: dataService,
    private alertServe: alertService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async submitBanner(form: NgForm) {
    if (form.invalid) return;
    else {
      // if (this.groupId == '' || this.groupId == null) {
        const jsonData = {
          title: this.bannerTitle,
          heading: this.bannerHeading,
          small_description: this.bannerSmallDesc,
          long_description: this.bannerLngDesc,
          status: this.status,
          // image: this.bannerImage,
          "image": this.imageName,
          "imageExt": this.image_ext,
        };
        if(!this.imageName || !this.image_ext){
          this.alertServe.presentToast("Please select Banner Image")
          return
        }
        await this.dataServe
          .postMethod(jsonData, 'banner/bannerCreate')
          .then(
            async (data) => {
              const res = JSON.parse(JSON.stringify(data));
              if (res?.errorNode?.errorCode == 0 && res?.data?.message) {
                this.alertServe.successAlert("banner created successfully")
                this.router.navigateByUrl('/banner-list')
              }
            },
            (err) => {
              // if (err?.status == 401) {
              //   this.localStorage.logout();
              // }
            }
          );
      // } else {
      //   const jsonData = {
      //     title: this.groupName,
      //     description: this.groupDescription,
      //     members: this.selected_members,
      //   };
      //   if (this.groupImage && this.groupImage.file && this.groupImage.filename)
      //     Object.assign(jsonData, { image: this.groupImage });

      //   await this.dataServe
      //     .postMethodWithToken(
      //       jsonData,
      //       'community/update/' + this.groupId,
      //       this.accessToken
      //     )
      //     .then(
      //       async (data) => {
      //         const res = JSON.parse(JSON.stringify(data));
      //         if (res?.serverResponse?.code == 200) {
      //           this.modalController.dismiss(true);
      //         }
      //       },
      //       (err) => {
      //         if (err?.status == 401) {
      //           this.localStorage.logout();
      //         }
      //       }
      //     );
      // }
    }
  }

 

  yourImage(ev:any, type:any) {
    let file = ev.files[0];
    console.log(file);
    if (file) {
      if (file.type == 'image/jpeg' || file.type == 'image/png') {
        if (file.size < 2100000) {
          let reader = new FileReader();
          reader.onloadend = (e) => {
            this.imageName = reader.result;
            this.image_ext = file.name.split('.').pop();
          };
          reader.readAsDataURL(file);
        } 
        // else {
        //   this.image_err = 'Image size exceeded.';
        // }
      }
    }
  }

  clearInvoiceImage() {
    this.imageName = null;
    this.image_ext = null;
  }

}
