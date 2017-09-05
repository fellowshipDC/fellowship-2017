import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BreedComponent } from './breed/breed.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    path:'breed',
    children:[],
    component: BreedComponent
  },
  {
    path:'gallery',
    children:[],
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
