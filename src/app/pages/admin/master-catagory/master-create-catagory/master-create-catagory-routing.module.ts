import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterCreateCatagoryPage } from './master-create-catagory.page';

const routes: Routes = [
  {
    path: '',
    component: MasterCreateCatagoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterCreateCatagoryPageRoutingModule {}
