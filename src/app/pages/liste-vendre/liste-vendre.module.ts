import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeVendrePageRoutingModule } from './liste-vendre-routing.module';

import { ListeVendrePage } from './liste-vendre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeVendrePageRoutingModule
  ],
  declarations: [ListeVendrePage]
})
export class ListeVendrePageModule {}
