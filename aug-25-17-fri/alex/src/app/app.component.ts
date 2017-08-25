import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  gifs: object[];
  q: string;

  constructor(private http: Http) {}
  

  onKey(event: any){
    this.q = event.target.value;
  

  
    this.http.get(
      'https://api.giphy.com/v1/gifs/search',
      {
        params: {
          api_key: '3a17d92e65284110a32859c6b92da1de',
          q: this.q,
          limit: 25,
          offset: 0,
          rating: 'G',
          lang: 'en'


        }


      }
  ).subscribe((res: Response) => this.gifs = res.json());
  }
  ngOnInit() {
    
  }

}
