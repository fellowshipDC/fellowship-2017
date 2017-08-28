import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  gifs: object;
  q: string;

  constructor(private http: Http) { }

  onKey(event: any){
    this.q = event.target.value;

    this.http.get('https://api.giphy.com/v1/gifs/search',{
      params: {
        'api_key': '73ad934950184ba0afc88a67a77095d1',
        q: this.q,
        limit: 12,
        offset: 0,
        rating: 'G',
        lang: 'en'
      }
    }).subscribe((res: Response) => this.gifs = res.json());
  }

  ngOnInit() {
    this.http.get('https://api.giphy.com/v1/gifs/search',{
      params: {
        'api_key': '73ad934950184ba0afc88a67a77095d1',
        q: this.q,
        limit: 12,
        offset: 0,
        rating: 'G',
        lang: 'en'
      }
    }).subscribe((res: Response) => this.gifs = res.json());
  }

}
