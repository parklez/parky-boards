import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavigationHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  // It`s easy to forget to explicitly export these modules!
  exports: [
    FooterComponent,
    NavigationHeaderComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
