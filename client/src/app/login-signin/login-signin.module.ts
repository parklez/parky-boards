import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginSigninRoutingModule } from './login-signin-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';


@NgModule({
  declarations: [
    LoginHomeComponent
  ],
  imports: [
    CommonModule,
    LoginSigninRoutingModule,
    // 1. Import the ReactFormsModule as it's more robust over template-driven approach.
    ReactiveFormsModule
  ]
})
export class LoginSigninModule { }
