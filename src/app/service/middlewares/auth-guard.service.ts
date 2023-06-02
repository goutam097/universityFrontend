import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { localStorageService } from '../local-storage/local-storage-service.service';
import { staticStorageService } from '../local-storage/static-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(  private platform: Platform,
    private storage: localStorageService,
    private staticData: staticStorageService,) { }
}
