import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSubCatagoryPageRoutingModule } from './list-sub-catagory-routing.module';

import { ListSubCatagoryPage } from './list-sub-catagory.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSubCatagoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListSubCatagoryPage]
})
export class ListSubCatagoryPageModule {}
