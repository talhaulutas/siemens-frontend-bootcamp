import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ParentPostComponent } from './components/parent-post/parent-post.component';
import { ChildPostComponent } from './components/child-post/child-post.component';
import { ChildSearchComponent } from './components/child-search/child-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentPostComponent,
    ChildPostComponent,
    ChildSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
