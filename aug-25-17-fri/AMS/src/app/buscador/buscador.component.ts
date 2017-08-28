import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.styl']
})
export class BuscadorComponent implements OnInit {

  q: string;
  gifs:object;

  constructor(private http: Http) { }

  onKey(event: any){
    this.q = event.target.value;

    this.http.get('https://api.giphy.com/v1/gifs/search',{
      params: {
        'api_key': '73ad934950184ba0afc88a67a77095d1',
        q: this.q,
        limit: 9,
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
        q: 'hello',
        limit: 3,
        offset: 5,
        rating: 'G',
        lang: 'en'
      }
    }).subscribe((res: Response) => this.gifs = res.json());
  }

}
