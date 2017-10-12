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
    this.http.get("https://api.collection.cooperhewitt.org/rest/",
  {
    params: {
      method: 'cooperhewitt.colors.palettes.getInfo',
      access_token:'0f32f939e11d25369ed3fdde8e6757da',
      palette: 'black'
    }
  }
).subscribe((res: Response) => this.culture =res.json());
  }

}
