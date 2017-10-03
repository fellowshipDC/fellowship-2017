
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  response: object;
  gifs: object[];
  q: string;

  constructor(private http: Http) {}

  onKey(event: any) {
    this.q = event.target.value;

    this.http
    .get('https://api.giphy.com/v1/gifs/search',
      {
        params: {
          api_key: '5184d7bf688e4d8a96fe20f7a7f4ba49',
          q: this.q,
          limit: 10,
          rating: 'G',
          lang: 'en'
        }
      }
    )
    .subscribe((res: Response) => {
      this.response = res.json();
      this.gifs = (this.response as any).data;
    });
  }

  ngOnInit() {

  }
}