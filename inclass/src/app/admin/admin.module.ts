import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminHomeComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
