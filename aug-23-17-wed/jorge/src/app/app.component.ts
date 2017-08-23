import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  books;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get(
      'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json',
      {
        params: {
          'api-key': '034ba3b659a140d3a558cf2e0a79614f'
        }
      }
    ).subscribe((res: Response) => this.books = res.json());
  }

}
