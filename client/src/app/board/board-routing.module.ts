import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardHomeComponent } from './board-home/board-home.component';

const routes: Routes = [
  {
    path: ':board', component: BoardHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
