import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BannerAddPageRoutingModule } from './banner-add-routing.module';

import { BannerAddPage } from './banner-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannerAddPageRoutingModule
  ],
  declarations: [BannerAddPage]
})
export class BannerAddPageModule {}
