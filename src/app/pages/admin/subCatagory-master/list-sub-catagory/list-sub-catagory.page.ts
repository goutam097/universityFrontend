import { Component, OnInit } from '@angular/core';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-list-sub-catagory',
  templateUrl: './list-sub-catagory.page.html',
  styleUrls: ['./list-sub-catagory.page.scss'],
})
export class ListSubCatagoryPage implements OnInit {
  masterList: any = [];


  constructor(
    private dataServe  : dataService,
    private alertServe : alertService,
  ) { }

  ngOnInit() {
    this.getmasterCatagoryApiCall();
  }

  async getmasterCatagoryApiCall() {
    // let JsonData = {
    //   slug
    // }
    await this.dataServe.getMethod('gallery/galleryList').then(
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

}
