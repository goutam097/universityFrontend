import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { alertService } from 'src/app/service/alert/alert-service.service';
import { dataService } from 'src/app/service/data/data-service.service';
import { staticStorageService } from 'src/app/service/local-storage/static-storage-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  headerClass: boolean = false;
  @ViewChild('stuff')
 stuff: IonSlides | undefined;


  bannerSlide = {
    slidesPerView: 6,
    speed: 1000,
    autoplay: true,
  };
  doman:any;
  details: any=[];
  pageUrl: any;
  address: any;
  city: any;
  state: any;
  zip_code: any;
  latitude: any;
  longitude: any;
  name: any;
  email: any;
  phoneNumber: any;
  subject: any;
  message: any;
  baseurl: any;
  
 


  constructor(
    private dataServer: dataService,
    private alertServe: alertService,
    public StorageService: staticStorageService,
  ) { }

  
  onScroll(ev: any) {
    if (ev.detail.scrollTop > 50) {
      this.headerClass = true;
    } else this.headerClass = false;
  }

  ngOnInit() {
  }
 

  async ionViewWillEnter() {
    this.baseurl =this.StorageService.domaneName
    console.log(this.baseurl);
    this.getAboutdetails();
    }

 

  async getAboutdetails() {
    await this.dataServer.getMethod("contact-us/list/"+this.baseurl).then(async data => {
      var res = JSON.parse(JSON.stringify(data));
      console.log(res,"For our aboutdetails")
      if(res.statusCode==0){
        this.details =res.details[0];
        this.address=this.details.address;
        this.city=this.details.city;
        this.state=this.details.state;
        this.zip_code=this.details.zip_code;
        this.latitude=this.details.latitude;
        this.longitude=this.details.longitude;
      }
    }, err => {
      this.alertServe.presentToast(err);
    });
  }

  contactForm(form:NgForm){
    if (form.invalid)
    return;
  else {
    let jData = {
      "full_name": this.name,
      "email_id": this.email,
      "contact_number": this.phoneNumber,
      "subject": this.subject,
      "message": this.message,
    }
    console.log(jData);
     this.dataServer.postMethod(jData,"admin/contactenquiry/create").then(async (data: any) => {
      var res = JSON.parse(JSON.stringify(data));
      console.log(res);
      if (res.errorCode == 0) {
        this.alertServe.presentToast("Submit successfully");
        let detailsInformatiom = res.details;
        window.location.reload();
        } 
    }, err => {
      this.alertServe.presentToast(err);
    });
  }
  }
}


