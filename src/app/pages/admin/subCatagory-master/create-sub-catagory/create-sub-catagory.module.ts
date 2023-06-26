import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSubCatagoryPageRoutingModule } from './create-sub-catagory-routing.module';

import { CreateSubCatagoryPage } from './create-sub-catagory.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSubCatagoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateSubCatagoryPage]
})
export class CreateSubCatagoryPageModule {}
