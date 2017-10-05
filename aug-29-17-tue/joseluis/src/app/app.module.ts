import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//indican la dirección de los componentes para que typescript pueda hallarlos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { RazaComponent } from './raza/raza.component';

@NgModule({ //decorator
  declarations: [ //Indica que componentes "existen"
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    FooterComponent,
    RazaComponent
  ],
  imports: [ //Nos permite usar otros módulos
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
