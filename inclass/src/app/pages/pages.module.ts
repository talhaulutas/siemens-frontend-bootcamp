import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherComponent } from './publisher/publisher.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublisherComponent,
    Sub1Component,
    Sub2Component
  ],
  exports: [
    PublisherComponent,
    Sub1Component,
    Sub2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
