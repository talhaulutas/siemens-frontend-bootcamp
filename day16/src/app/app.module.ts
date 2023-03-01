import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { TwoWayBindingComponent } from './forms/two-way-binding/two-way-binding.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { InclassComponent } from './forms/inclass/inclass.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TwoWayBindingComponent,
    ReactiveFormsComponent,
    InclassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
