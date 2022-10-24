import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginScreenPageRoutingModule } from './login-screen-routing.module';

import { LoginScreenPage } from './login-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginScreenPageRoutingModule
  ],
  declarations: [LoginScreenPage]
})
export class LoginScreenPageModule {}
