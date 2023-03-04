import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class SharedModule { }
