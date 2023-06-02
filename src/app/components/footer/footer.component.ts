import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';
import { localStorageService } from 'src/app/service/local-storage/local-storage-service.service';
import { staticStorageService } from 'src/app/service/local-storage/static-storage-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  email: any;
  sidesettingDetails: any=[];
  policyList: any=[];
  date:any;

  constructor(
    private staticStorage: staticStorageService,
    private dataServer: dataService,
    private localStorage: localStorageService,
    private router: Router,
    private alertServe: alertService,
 
  ) { }

  async ngOnInit() {
  }
  }

