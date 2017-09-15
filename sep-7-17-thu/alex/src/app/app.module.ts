import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CintaComponent } from './cinta/cinta.component';
import { BuildComponent } from './build/build.component';
import { FunctionsComponent } from './functions/functions.component';
import { WhoComponent } from './who/who.component';
import { ImagecarruselComponent } from './imagecarrusel/imagecarrusel.component';
import { NowappComponent } from './nowapp/nowapp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CintaComponent,
    BuildComponent,
    FunctionsComponent,
    WhoComponent,
    ImagecarruselComponent,
    NowappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
