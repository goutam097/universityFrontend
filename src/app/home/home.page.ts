import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { dataService } from '../service/data/data-service.service';
import { alertService } from '../service/alert/alert-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('bannerSlide')
  bannerSlide: IonSlides | undefined;
  @ViewChild('stuff')
  stuff: IonSlides | undefined;

  headerClass: boolean = false;

  bannerSlideOpt = {
    slidesPerView: 1,
    speed: 1000,
    autoplay: true,
  };

  testimonialsSlideOpt = {
    slidesPerView: 2,
    speed: 1000,
    autoplay: true,
  };

  facultySlideOpt = {
    slidesPerView: 4,
    speed: 1000,
    autoplay: true,
  };

  bannerList: any = [];

  constructor(
    private dataServe: dataService,
    private alertServe: alertService
  ) {}

  ngOnInit() {
    this.getbannerApiCall();
  }

  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
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
}
