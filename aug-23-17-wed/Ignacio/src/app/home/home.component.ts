import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit{
  books;

  constructor(private http:Http){}
 
   ngOnInit() {
     this.http.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json',
     {
      params:{
        'api-key':'0f47e6796f11458da15cd7b5af8f12fd'
       }
     
      }).subscribe((res:Response)=> this.books = res.json());

  }
  
}
