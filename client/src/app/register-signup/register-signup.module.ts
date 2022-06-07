import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterSignupRoutingModule } from './register-signup-routing.module';
import { SigninHomeComponent } from './signup-home/signin-home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninHomeComponent
  ],
  imports: [
    CommonModule,
    RegisterSignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterSignupModule { }
