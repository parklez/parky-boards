import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./home/home.module').then((m) => m.HomeModule),
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
