import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseListPageRoutingModule } from './course-list-routing.module';

import { CourseListPage } from './course-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CourseListPage]
})
export class CourseListPageModule {}
