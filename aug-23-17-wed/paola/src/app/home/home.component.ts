import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root', //app-home
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit { //AppComponents
  
    books;
    
    constructor(private http: Http){}
  
      ngOnInit() {
        this.http.get("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json",
        {
          params: {
            'api-key': '5cb730d5ca6a45a8bf88fadc91c501a0'
          }
         }
      ).subscribe((res: Response) => this.books = res.json());
  
      }
  
  }
  