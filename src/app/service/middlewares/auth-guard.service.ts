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
    private staticData: staticStorageService,
    private route: Router
    ) { }


    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      const that = this;
      console.log('auth gard service');
      return new Observable((observer) => {
        that.platform.ready().then(() => {
          that.storage
            .getObject(this.staticData.storageName)
            .then(async (val) => {
              await that.storage.get_all_Details();
              const path: any = this.route.url;
              const path1: string[] = this.platform.url().split(path);
              const url = path1[3];
              observer.next(true);
              console.log('urlllllllllllllll', url);
            });
        });
      });
    }
}
