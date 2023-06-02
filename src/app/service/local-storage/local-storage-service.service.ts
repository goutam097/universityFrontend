import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { staticStorageService } from '../local-storage/static-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class localStorageService {

  constructor( private storage: Storage,
    private stData: staticStorageService) { }

    /**
   * this function is called to set data in key value pair from storage
   */
  async set(key: string, value: any): Promise<any> {
    try {
      const result = await this.storage.set(key, value);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }



  /**
   * this function is called to get data in key value pair from storage
   */
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }



  /**
   * this function is called to set a object in key value pair
   */
  async setObject(key: string, object: Object) {
    try {
      await this.storage.create();
      const result = await this.storage.set(key, JSON.stringify(object));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }



  /**
   * this function is called to get a object in key value pair
   */
  async getObject(key: string): Promise<any> {
    try {
      await this.storage.create();
      const result = await this.storage.get(key);
      // console.log(result)
      if (result != null) {
        return result;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }



  /**
   * this function is called to get Login data
   */
   async getLoginData(): Promise<any> {
    try {
      const result = await this.storage.get(this.stData.storageName);
      await this.get_all_Details();
      // console.log(result)
      if (result != null) {
        return result;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }



  /**
   * this function is called to get user details
   */
  async get_all_Details() {
    try {
      await this.getObject(this.stData.storageName).then((resu) => {
        const sess = JSON.parse(resu);
        console.log(sess);
        if (sess) {
          this.stData.sessionUserLoggedin  = true;
          this.stData.userId               = sess.id;
          this.stData.sessionUserName      = sess.name;
       // this.stData.sessionUserLastName  = sess.l_name;
          this.stData.sessionUserEmail     = sess.email_id;
          this.stData.sessionUserMobile    = sess.mobile_no;
          this.stData.registerType         = sess.user_type;
          this.stData.sessionId            = sess.id; 
          this.stData.status               = sess.status;
         

        } else {
          this.stData.sessionUserLoggedin  = false;
          this.stData.sessionUserName      = '';
       // this.stData.sessionUserLastName  = '';
          this.stData.sessionUserEmail     = '';
          this.stData.sessionUserMobile    = '';
          this.stData.registerType         = '';
          this.stData.status               = '';

        }
      });
    } catch (reason) {
      console.log(reason);
    }
  }



  /**
   * Logout a user from the session
   */
  async logout() {
    await this.storage.create();
    await this.storage.remove(this.stData.storageName).then((sessdata) => {
      console.log(sessdata)
      this.storage.clear();
      this.stData.sessionUserLoggedin  = false;
      this.stData.sessionUserName      = '';
   // this.stData.sessionUserLastName  = '';
      this.stData.sessionUserEmail     = '';
      this.stData.sessionUserMobile    = '';
      this.stData.registerType         = '';
      this.stData.status               = '';
      window.location.reload();
    });
  }
  
}

