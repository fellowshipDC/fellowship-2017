import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NellyComponent } from './nelly/nelly.component';
import { RolandoComponent } from './rolando/rolando.component';

@NgModule({
  declarations: [
    AppComponent,
    NellyComponent
    RolandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
