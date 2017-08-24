import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  books;
  constructor(private http: Http) {}


  ngOnInit() {
    this.http.get(
      'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json',
      {
        params: {
          'api-key': '0ae005a2c9ea41ca9a8fccbfa49126de'
        }

      }).subscribe((res: Response) => this.books = res.json());
  }

}
