import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { BreedComponent } from "./breed/breed.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },{
    path:'home',
    component:HomeComponent
  }
  ,
  {
    path:'breed/:breed',
    component:BreedComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
