import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomComponent } from './custom/custom.component';
import { FeaturesComponent } from './features/features.component';
import { UsingComponent } from './using/using.component';
import { NowgoComponent } from './nowgo/nowgo.component';
import { FooterComponent } from './footer/footer.component';
import { WhoComponent } from './who/who.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CustomComponent,
    FeaturesComponent,
    UsingComponent,
    NowgoComponent,
    FooterComponent,
    WhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
