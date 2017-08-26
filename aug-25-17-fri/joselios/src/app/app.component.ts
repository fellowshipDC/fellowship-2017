import { Component, OnInit } from '@angular/core';
import  { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gifs:object[];
  q: string;

  constructor(private http: Http) {}

  onKey(event: any) {
    this.q = event.target.value;
    this.http
    .get('https://api.giphy.com/v1/gifs/search',
  {
    params : {
      api_key : '52f2912d7def4308b67ad7dba923068a',
      q : this.q,
      limit : 20,
      rating : 'G',
      lang : 'en',
    } 
  }
)
.subscribe((res : Response) => this.gifs = res.json());
}

ngOnInit() {

  }
}
/*

ngOnInit (){
    this.http.get('https://api.giphy.com/v1/gifs/search',
  {
    params: {
      api_key : '52f2912d7def4308b67ad7dba923068a',
      q: 'dog',
      limit: 25,
      rating : 'G',
      lang : 'en'  
    }
  }).subscribe(( res : Response) => this.gifs = res.json()); 
}
}
*/