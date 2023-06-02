import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachersListPageRoutingModule } from './teachers-list-routing.module';

import { TeachersListPage } from './teachers-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachersListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TeachersListPage]
})
export class TeachersListPageModule {}
