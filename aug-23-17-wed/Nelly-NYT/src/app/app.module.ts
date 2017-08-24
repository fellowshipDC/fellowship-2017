import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookComponent} from "./book/book.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
