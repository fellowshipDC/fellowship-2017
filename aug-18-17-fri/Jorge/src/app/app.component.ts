import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Viernes de meetup! :) ';
//getter
 getTitle(){
   return this.title;
 }
 //Setter
 setTitle(title){
   this.title = title;
 }

 applyColor(color){
let header = document.getElementById ("header");
header.setAttribute("style","color:"+color);
 }

 applyBold(bold){
   let header = document.getElementById ("header");
   header.setAttribute("style","font-weight:100");
 }

 applyItalic() {
   let header = document.getElementById('header');
   header.setAttribute("style", "font-style: italic");
 }

 applySize() {
   let header = document.getElementById('header');
   header.setAttribute("style", "font-size: 100px");
 }
 applySubray(){
   let header = document.getElementById('header');
   header.setAttribute("style", "text-decoration:underline");
 }
}
