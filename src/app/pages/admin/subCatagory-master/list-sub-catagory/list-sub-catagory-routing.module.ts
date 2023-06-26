import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSubCatagoryPage } from './list-sub-catagory.page';

const routes: Routes = [
  {
    path: '',
    component: ListSubCatagoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSubCatagoryPageRoutingModule {}
