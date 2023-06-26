import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.page.html',
  styleUrls: ['./banner-list.page.scss'],
})
export class BannerListPage implements OnInit {
  bannerList: any = [];

  constructor(
    // private localStorage: LocalStorageService,
    // private staticStorage: StaticStorageService,
    // private http :  HttpClient,
    // private route :  Router,
    private dataServe: dataService,
    private alertServe: alertService,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.getbannerApiCall();
  }

  async getbannerApiCall() {
    await this.dataServe.getMethod('banner/bannerList').then(
      async (data) => {
        const res = JSON.parse(JSON.stringify(data));
        if (res?.errorNode?.errorCode == 0 && res?.success) {
          this.bannerList = res?.details || [];
        } else {
          this.alertServe.presentToast(res?.serverResponse?.message);
        }
      },
      (err) => {
        this.alertServe.presentToast(err);
      }
    );
  }

  // async deleteBanner(id:any){
  //     const jsonData = {
  //       id:id
  //     }
  //     await this.dataServe.postMethod(jsonData,'banner/bannerDelete').then(
  //       async (data) => {
  //         const res = JSON.parse(JSON.stringify(data));
  //         if (res?.errorNode?.errorCode == 0 ) {
  //          this.getbannerApiCall();
  //          this.alertServe.successAlert(res?.data?.message);
  //           // this.bannerList = res?.details || [];
  //         } else {
  //           this.alertServe.presentToast(res?.serverResponse?.message);
  //         }
  //       },
  //       (err) => {
  //         this.alertServe.presentToast(err);
  //       }
  //     );
  //   }

  async deleteBanner(id: any, i: any) {
    let alertConfirm = this.alert.create({
      // title: 'Delete Items',
      message: 'Are You Sure delete this items?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          },
        },
        {
          text: 'Yes',
          handler: () => {
            const jsonData = {
              id: id,
            };
            this.dataServe.postMethod(jsonData, 'banner/bannerDelete').then(
              (data) => {
                const res = JSON.parse(JSON.stringify(data));
                // if (res?.code == 200) {
                if (res?.errorNode?.errorCode == 0) {
                  this.bannerList.splice(i, 1);
                }
              },
              (err) => {
                // if (err?.status == 401) {
                //   this.localStorage.logout();
                // }
              }
            );
          },
        },
      ],
    });
    await (await alertConfirm).present();
  }
}
