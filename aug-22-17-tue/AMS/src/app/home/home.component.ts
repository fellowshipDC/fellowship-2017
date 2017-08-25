import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  books;
  
    constructor(private http: Http) {
  
    }
  
  
    ngOnInit() {
      this.http.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json',
      {
        params: {
          'api-key': "0b9f857f21e845ffbf42e17587a3ce49"
        }
       }
      ).subscribe((res: Response) => this.books = res.json());
    }

}
