import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  books;

  constructor (private http:Http){}

  ngOnInit(){
    this.http.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json',
    {
      params:{
        'api-key' : '3af18d2605dd4b8080c61c21f7287103'
      }
    }
  ).subscribe((res: Response)=> this.books = res.json());
  }
}
