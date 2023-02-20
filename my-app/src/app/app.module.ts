import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponent } from './components/inline-component/inline.component';

import { NormalComponent } from './components/normal/normal.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
