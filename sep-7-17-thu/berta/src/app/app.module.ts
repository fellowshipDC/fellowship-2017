import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ThirdpartComponent } from './thirdpart/thirdpart.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FirstpartComponent } from './firstpart/firstpart.component';
import { SecondpartComponent } from './secondpart/secondpart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ThirdpartComponent,
    CarouselComponent,
    FirstpartComponent,
    SecondpartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
