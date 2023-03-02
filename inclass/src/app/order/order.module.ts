import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { RouterModule, Routes } from '@angular/router';

const router:Routes = [
  {path:'new-order',component:NewComponent}
]

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class OrderModule { }
