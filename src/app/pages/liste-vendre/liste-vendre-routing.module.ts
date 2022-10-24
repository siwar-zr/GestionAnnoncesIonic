import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeVendrePage } from './liste-vendre.page';

const routes: Routes = [
  {
    path: '',
    component: ListeVendrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeVendrePageRoutingModule {}
