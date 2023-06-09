import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BannerListPageRoutingModule } from './banner-list-routing.module';

import { BannerListPage } from './banner-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannerListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BannerListPage]
})
export class BannerListPageModule {}
