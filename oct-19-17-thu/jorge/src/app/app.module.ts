import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { ScatterComponent } from './scatter/scatter.component';
import { TreemapComponent } from './treemap/treemap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent,
    ScatterComponent,
    TreemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
