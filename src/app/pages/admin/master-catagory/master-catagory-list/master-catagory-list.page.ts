import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-master-catagory-list',
  templateUrl: './master-catagory-list.page.html',
  styleUrls: ['./master-catagory-list.page.scss'],
})
export class MasterCatagoryListPage implements OnInit {
  masterList: any = [];
  BaseUrl      : any = environment.baseUrl;


  constructor(
    private dataServe  : dataService,
    private alertServe : alertService,
    private router     : Router
  ) { }

  ngOnInit() {
    this.getmasterCatagoryApiCall();
  }

  async getmasterCatagoryApiCall() {
    await this.dataServe.getMethod('master/masterList').then(
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
