import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterCatagoryListPageRoutingModule } from './master-catagory-list-routing.module';

import { MasterCatagoryListPage } from './master-catagory-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterCatagoryListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MasterCatagoryListPage]
})
export class MasterCatagoryListPageModule {}
