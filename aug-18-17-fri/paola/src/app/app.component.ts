import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Hola';

 getTitle(){
   return this.title;
 }

 setTitle(title){
   this.title = title;
 }

 applyColor(color){
   let header = document.getElementById ("header");
   header.setAttribute("style","color:"+color);
 }

 applyBold(){
   let header = document.getElementById ("header");
   header.setAttribute("style","font-weight:bold");
 }

 applyItalic() {
   let header = document.getElementById('header');
   header.setAttribute("style", "font-style: italic");
 }

 applySize() {
   let header = document.getElementById('header');
   header.setAttribute("style", "font-size: 100px");
 }
 applyLine(){
   let header = document.getElementById('header');
   header.setAttribute("style", "text-decoration:underline");
 }
}
