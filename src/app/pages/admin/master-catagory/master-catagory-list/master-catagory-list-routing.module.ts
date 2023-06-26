import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterCatagoryListPage } from './master-catagory-list.page';

const routes: Routes = [
  {
    path: '',
    component: MasterCatagoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterCatagoryListPageRoutingModule {}
