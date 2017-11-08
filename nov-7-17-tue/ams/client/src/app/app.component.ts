import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';
  author = [];

  constructor (private http: Http ){}

  ngOnInit(){
    this.http.get('http://localhost:3000/authors', {}).subscribe((res: Response) =>{
      console.log(res);
      this.author = res.json().authors;      
    }
  )}
}
