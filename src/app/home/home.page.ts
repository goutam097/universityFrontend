import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

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

  constructor(
  ) { }

  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
  }

}
