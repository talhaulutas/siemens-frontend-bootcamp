import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/home.component';
import { AdminAboutComponent } from './about/about.component';
import { AdminContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminAboutComponent,
    AdminContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
