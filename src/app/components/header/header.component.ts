import {Component,OnInit } from '@angular/core';
import { staticStorageService } from 'src/app/service/local-storage/static-storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  sessionLogin: boolean = false;
  LoginStatus: boolean = false;
  name: any;
  registerType: any;
  userId: any;
  immigrationserviceList:any=[];
  immigrationSubCatagoryList:any=[];
  slug: any;


  constructor(public StorageService: staticStorageService)
  { }

  async ngOnInit() {
    console.log(window.location,"local");
   // this.StorageService.domaneName= window.location.hostname;
    this.StorageService.domaneName= "Domain"; 
  }
}
