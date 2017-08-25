import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  films: object[];
  peoples: object[];
  constructor(private http: Http) { }

  getFilms(){
    this.http.get('https://ghibliapi.herokuapp.com/films').subscribe((res: Response) => this.films = res.json());

  }
  getPeople(){
    this.http.get('https://ghibliapi.herokuapp.com/people').subscribe((res: Response) => this.peoples = res.json());
  }

  ngOnInit() {
    this.getFilms();
    this.getPeople();
  }


}
