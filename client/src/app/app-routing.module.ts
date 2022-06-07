import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import ('./login-signin/login-signin.module').then((m) => m.LoginSigninModule),
  },
  {
    path: 'signup',
    loadChildren: () => import ('./register-signup/register-signup.module').then((m) => m.RegisterSignupModule),
  },
  {
    path: 'boards',
    loadChildren: () => import ('./board/board.module').then((m) => m.BoardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
