import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-details',
  templateUrl: './teachers-details.page.html',
  styleUrls: ['./teachers-details.page.scss'],
})
export class TeachersDetailsPage implements OnInit {
  headerClass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  testiSlideOpts = {
    slidesPerView: 2,
    speed: 1000,
    autoplay: true,
  };

  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
  }

}
