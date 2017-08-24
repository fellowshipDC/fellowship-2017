import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    path: 'image/:url',
    children: [],
    component: ImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
