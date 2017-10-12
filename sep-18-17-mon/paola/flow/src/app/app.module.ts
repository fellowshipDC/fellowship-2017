import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { FooterComponent } from './footer/footer.component';
import { SeccunoComponent } from './seccuno/seccuno.component';
import { PrefooterComponent } from './prefooter/prefooter.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    DocsComponent,
    FooterComponent,
    SeccunoComponent,
    PrefooterComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
