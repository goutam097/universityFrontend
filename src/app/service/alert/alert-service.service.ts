import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { staticStorageService } from '../local-storage/static-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class alertService {

  constructor( private alert: AlertController,
    private toast: ToastController,
    private stData: staticStorageService,
    private router: Router) { }



  /**
  * this function is called to display error alert 
  */
  async errorAlert(msg: string) {
    if (this.stData.isDevice) {
      this.presentToast(msg);
    } else {
      const alert = await this.alert.create({
        header: 'Error!',
        message: msg,
        cssClass: 'langDelete',
        buttons: [
          {
            text: 'Ok',
            cssClass: 'secondary',
            role: "cancel"
          }
        ]
      });
      await alert.present();
    }
  }



  /**
   * this function is called to display success alert 
   */
  async successAlert(msg: string) {
    if (this.stData.isDevice) {
      this.presentToast(msg);
    } else {
      const alert = await this.alert.create({
        header: 'Success',
        message: msg,
        cssClass: 'langDelete',
        buttons: [
          {
            text: 'Ok',
            cssClass: 'secondary',
            role: "cancel"
          }
        ]
      });
      await alert.present();
    }
  }



  /**
   * this function is called to display success alert 
   */
  async customAlert(header: string, msg: string) {
    if (this.stData.isDevice) {
      this.presentToast(msg);
    } else {
      const alert = await this.alert.create({
        header: header,
        message: msg,
        cssClass: 'langDelete',
        buttons: [
          {
            text: 'Ok',
            cssClass: 'secondary',
            role: "cancel"
          }
        ]
      });
      await alert.present();
    }
  }



  /**
   * this function is called to display Toast msg 
   */
  async presentToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }



  /**
   * this function is call to go notification
   * @param data 
   */
  async pushNotificationPresentToast(data: any) {
    console.log(data)
    const toast = await this.toast.create({
      header: data.title,
      message: data.body,
      position: 'bottom',
      duration: 5000,
      buttons: [
        {
          text: 'Open',
          role: 'cancel',
          handler: () => {
            if (data.page == "new-delivery") {
              this.stData.routeChange('/new-delivery/' + Number(data.orderId))
            }
          }
        }
      ]
    });
    toast.present();
  }
  /**
   * Dev: Chandan
   * Desc: success alert link with routing link.
   * @param msg 
   * @param link 
   */
  async successAlertWithLink(msg: string, link: string | UrlTree) {
    const alert = await this.alert.create({
      header: 'Success',
      message: msg,
      cssClass: 'langDelete',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: () => {
            if (link) {
              //window.open(link,'_blank')
              this.router.navigateByUrl(link)
            }
          }
        }
      ]
    });
    await alert.present();

  }

  async errorAlertWithLink(msg: string, link: string | UrlTree) {
    const alert = await this.alert.create({
      header: 'Error',
      message: msg,
      cssClass: 'langDelete',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: () => {
            if (link) {
              //window.open(link,'_blank')
              this.router.navigateByUrl(link)
            }
          }
        }
      ]
    });
    await alert.present();
  }
}

function errorAlert(msg: any, string: any) {
  throw new Error('Function not implemented.');
}

