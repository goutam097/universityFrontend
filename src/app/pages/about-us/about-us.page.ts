import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';
import { staticStorageService } from 'src/app/service/local-storage/static-storage-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  headerClass: boolean = false;

  constructor(
  ) { }

  
  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
  }

  ngOnInit() {
  }

  courcesSlideOpt = {
    slidesPerView: 1,
    speed: 1000,
    autoplay: true,
  };

  facultySlideOpt = {
    slidesPerView: 4,
    speed: 1000,
    autoplay: true,
  };

}


