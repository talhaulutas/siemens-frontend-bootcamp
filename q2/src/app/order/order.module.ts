import { createComponent, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateorderComponent } from './createorder/createorder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderLayoutComponent } from '../shared/order-layout/order-layout.component';
import { HomeComponent } from './home/home.component';

const router:Routes = [{path:'order',component:OrderLayoutComponent,children:[
  {path:'create-order',component:CreateorderComponent},
  {path:'update-order',component:UpdateorderComponent},
]}]

@NgModule({
  declarations: [
    CreateorderComponent,
    UpdateorderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class OrderModule { }
