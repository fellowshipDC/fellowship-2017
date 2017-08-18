import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Viernes de meetup! :S ';

  getTitle(){
    return this.title;
  }

  setTitle(title){
    this.title = title;
  }

  applyColor(color){
    let header = document.getElementById ('header');
    header.setAttribute('style','color:' + color);
  }

  applyBold(){
    let header = document.getElementById ('header');
    header.setAttribute("style", "font-weight : 100");
  }

  applyItalic(){
    let header = document.getElementById ("header");
    header.setAttribute("style", "font-style : italic");
  }

  applysize(size){
    let header = document.getElementById ('header');
    header.setAttribute("style","font-size:" + size);
  }

  applySubrayado(){
    let header = document.getElementById ("header");
    header.setAttribute("style", "text-decoration : underline");
  }

}
