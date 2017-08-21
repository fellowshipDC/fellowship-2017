import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ImagenComponent } from './imagen/imagen.component';

const routes: Routes = [
  {
    path: 'home',
    children: [],
    component: HomeComponent 
  },
  {
    path: '',
    children: [],
    component: ImagenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
