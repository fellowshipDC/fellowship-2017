import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Viernes de meetup!';

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    return this.title = newTitle;
  }

  changeColor(color) {
    let header = document.getElementById('header');
    header.setAttribute('style','color:'+ color); 
  }

  applyBold() {
    let header = document.getElementById('header');
    header.setAttribute('style', 'font-weight: 100' );
  }

  applyItalic() {
    let header = document.getElementById('header');
    header.setAttribute('style', 'font-style: italic' );
  }

  applyS() {
    let header = document.getElementById('header');
    header.setAttribute('style', 'text-decoration: underline' );
  }
}
