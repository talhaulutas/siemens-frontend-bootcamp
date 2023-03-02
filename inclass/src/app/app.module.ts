import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PublisherComponent } from './subject/publisher/publisher.component';
import { Sub1Component } from './subject/sub1/sub1.component';
import { Sub2Component } from './subject/sub2/sub2.component';

@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    Sub1Component,
    Sub2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
