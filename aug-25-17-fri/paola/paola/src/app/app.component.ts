import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  gifs?: any;
  q: string;

  constructor(private http: Http) {}

    onKey(event: any) { // Método vinculado a la directiva keyup
      this.q = event.target.value;
      this.http
     .get('https://api.giphy.com/v1/gifs/search',
     {
       params: {
       api_key: '1269c9df70c5432ea264e920fcee471f',
       q: this.q,
       limit: 25,
       rating: 'G',
       lan: 'eng'
        }
     }
    ).subscribe((res: Response) => this.gifs = res.json());
    }

    ngOnInit() {
  }
}
