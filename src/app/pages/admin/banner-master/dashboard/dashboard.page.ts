import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  headerClass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
  }

}
