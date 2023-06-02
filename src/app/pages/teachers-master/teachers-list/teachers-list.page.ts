import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.page.html',
  styleUrls: ['./teachers-list.page.scss'],
})
export class TeachersListPage implements OnInit {
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
