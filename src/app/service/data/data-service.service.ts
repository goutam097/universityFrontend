import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { staticStorageService } from  '../local-storage/static-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class dataService {

  constructor( private http: HttpClient,
    private staticData: staticStorageService) { }


     /**
   * This function is called to hit an api with post methode
   * @param data 
   * @param route 
   * @returns response or error
   */
  async postMethod(data: any, route: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.staticData.baseUrl + route, data).subscribe(res => {
        resolve(res);
        console.log(this.staticData.baseUrl + route);
        // console.log(JSON.stringify(res));
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }



  /**
   * This function is called to hit an api with get methode
   * @param route 
   * @returns response or error
   */
  async getMethod(route: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.staticData.baseUrl + route).subscribe(res => {
        resolve(res);
        // console.log(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }
  
 /**
   * This function is called to hit an api with delete methode
   * @param route 
   * @returns response or error
   */
  async deleteMethod(route: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.staticData.baseUrl + route).subscribe(res => {
        resolve(res);
        console.log(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

    /**
   * This function is called to hit an api with get methode
   * @param route 
   * @returns response or error
   */
     async getMethodRandomUrl(route: string) {
      return new Promise((resolve, reject) => {
        this.http.get(route).subscribe(res => {
          resolve(res);
          console.log(res);
        }, err => {
          console.log(err);
          reject(err);
        });
      });
    }

  /**
   * Common function for post methode api call 
   * its send json data and routes return responce data or error
   * @param data 
   * @param route 
   * @param tocken
   * Developer : chandan
   */
   async postMethodWithToken(data: any, route: string,tocken: any){
    //console.log(this.backendUrl+route)
      return new Promise((resolve, reject) => {
        var httpHeaders = new HttpHeaders();
        //httpHeaders = httpHeaders.append('token',tocken?tocken:'');
        httpHeaders = httpHeaders.append('Authorization', `Bearer ${tocken}`);
        this.http.post(this.staticData.baseUrl+route,data,{headers:httpHeaders}).subscribe(resp => {
          //console.log(resp)
          resolve(resp);
        }, err => {
          console.error("error============>"+err);
          reject(err);
        });
      });  
  }
  
  /**
   * Common function for get methode api call 
   * its send routes return responce data or error
   * @param route 
   * @param tocken
   * Developer : chandan
   */
   async getMethodWithTocken(route: string,tocken: any){
    return new Promise((resolve, reject) => {
      var httpHeaders = new HttpHeaders();
        //httpHeaders = httpHeaders.append('token',tocken?tocken:'');
        httpHeaders = httpHeaders.append('Authorization', `Bearer ${tocken}`);
      this.http.get(this.staticData.baseUrl+route,{headers:httpHeaders}).subscribe(resp => {
        //console.log("Routes==========================>"+this.baseUrl+route+"====>methode GET");
        console.log("responce data=====================>");
        //console.log(resp);
        resolve(resp);
      }, err => {
        console.error("error============>"+err);
        reject(err);
      });
    });
  }

}




