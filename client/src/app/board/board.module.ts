import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardHomeComponent } from './board-home/board-home.component';
import { ThreadTemplateComponent } from './thread-template/thread-template.component';
import { BoardHeaderComponent } from './board-header/board-header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { QuickNavigationComponent } from './quick-navigation/quick-navigation.component';


@NgModule({
  declarations: [
    BoardHomeComponent,
    ThreadTemplateComponent,
    BoardHeaderComponent,
    InputFormComponent,
    QuickNavigationComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
  ]
})
export class BoardModule { }
