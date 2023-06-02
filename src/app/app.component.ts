import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  immigrationserviceList:any=[];

  constructor(
    private router: Router,
    private dataServer: dataService,
    private alertServe: alertService,
  ) {}

  async ngOnInit() {
    // this.ImmigrationServicesList();
  }

  async ImmigrationServicesList() {
    await this.dataServer.getMethod("immigrationservice/list").then(async data => {
      var res = JSON.parse(JSON.stringify(data));
      if(res.results.statusCode == 0){
        this.immigrationserviceList = res.results.list;
      }
    }, err => {
      this.alertServe.presentToast(err);
    });
  }

  immigrationSubList(val:any){
    if(val.length==0){
    this.router.navigateByUrl("/immigration-services")
    }
  }
}
