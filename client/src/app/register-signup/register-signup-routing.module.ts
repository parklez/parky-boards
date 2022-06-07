import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninHomeComponent } from './signup-home/signin-home.component';

const routes: Routes = [
  {
    path: '', component: SigninHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterSignupRoutingModule { }
