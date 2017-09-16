import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { WhosusingsailsComponent } from './whosusingsails/whosusingsails.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { GobuildComponent } from './gobuild/gobuild.component';
import { FooterfinalComponent } from './footerfinal/footerfinal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CharacteristicsComponent,
    WhosusingsailsComponent,
    CarrouselComponent,
    GobuildComponent,
    FooterfinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
