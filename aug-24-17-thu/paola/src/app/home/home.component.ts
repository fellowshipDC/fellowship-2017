import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  culture;

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("http://api.harvardartmuseums.org/culture",
  {
    params: {
      'api-key':'2237e3f0-88f6-11e7-9655-1922e29f6460'
    }
  }
).subscribe((res: Response) => this.culture =res.json());
  }

}
