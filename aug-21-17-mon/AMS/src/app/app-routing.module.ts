import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagenComponent } from './imagen/imagen.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    path: 'imagen/:str',
    children: [],
    component: ImagenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
