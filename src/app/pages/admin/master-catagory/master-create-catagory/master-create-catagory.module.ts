import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterCreateCatagoryPageRoutingModule } from './master-create-catagory-routing.module';

import { MasterCreateCatagoryPage } from './master-create-catagory.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterCreateCatagoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MasterCreateCatagoryPage]
})
export class MasterCreateCatagoryPageModule {}
