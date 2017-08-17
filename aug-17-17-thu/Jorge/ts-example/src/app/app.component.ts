import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Jorge';

  getTitle() {
    return this.title;
  }

  changeName() {
    this.title = 'Data Cívica';
    let header = document.getElementById('header');
    header.setAttribute("style","color: red");
  }

  ngOnInit() { // Life Cycle

  }
}
