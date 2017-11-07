import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  books: any;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('http://192.168.1.112:3000/books', {})
      .subscribe((res: Response) => {
        this.books = res.json().books;
      });
  }
}
