import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Mozilla';

  getTitle(){
    return this.title;
  }

  setTitle(){
    this.title = "Mozilla VR";
  }

  applyColor(){
    let header = document.getElementById ("header");
    header.setAttribute("style","color:red");
  }

  applySize(){
    let header = document.getElementById("header");
    header.setAttribute("style", "font-size:120px");
  }

  applyBold(bold){
    let header = document.getElementById("header");
    header.setAttribute("style", "font-weight:900")
  }

  applyItalic(){
    let header = document.getElementById("header");
    header.setAttribute("style", "font-style:italic")
  }

  applySubray(){
    let header = document.getElementById("header");
    header.setAttribute("style", "text-decoration:underline");
  }
}
