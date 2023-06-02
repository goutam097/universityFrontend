import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class staticStorageService {
  //isDevice: boolean;
  baseUrl = "http://localhost:3000/api/";
  storageName = 'canAmercia_storage';
  maxOtpSendTime = 60;
  sessionUserLoggedin    : any = false;
  userId                 : any;
  sessionUserName        : any;
  // sessionUserLastName : any;
  sessionUserEmail       : any;
  sessionUserMobile      : any;
  sessionToken           : any;
  registerType           : any;
  sessionId              : any;
  status                 : any;
  isDevice               : any;


  date = new Date();
  month = this.date.getMonth() + 1
  storeStorageName = this.date.getDate() + '/' + this.month + '/' + this.date.getFullYear() + '/store';
  domaneName: any;
  

  constructor(
    private route: Router
  ) { }


  /**
   * This function is called to change router
   * @param url
   */
  routeChange(url: string) {
    this.route.navigateByUrl(url);
  }
}
