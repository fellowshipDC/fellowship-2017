import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {
    path: 'home',
    children: [],
    component: HomeComponent
  },
  {
    path: 'image',
    children: [],
    component: ImageComponent
  }
  {
    path: 'image/:id',
    component: ImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
