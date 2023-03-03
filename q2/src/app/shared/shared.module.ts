import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { OrderLayoutComponent } from './order-layout/order-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    MainLayoutComponent,
    OrderLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
