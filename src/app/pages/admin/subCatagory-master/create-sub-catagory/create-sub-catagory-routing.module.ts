import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSubCatagoryPage } from './create-sub-catagory.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSubCatagoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSubCatagoryPageRoutingModule {}
