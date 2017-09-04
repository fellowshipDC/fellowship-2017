import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as d3 from "d3";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.styl']
})
export class InfoComponent implements OnInit {

  data: object;

  constructor(private http: Http) { }

  getData() {
    this.http.get("https://data.cityofchicago.org/resource/b6tt-rgti.json").subscribe((res: Response) => this.data = res.json());
  }
  ngOnInit() {
    this.getData();
    this.showData();
  }

  showData() {
    d3.json("https://data.cityofchicago.org/resource/b6tt-rgti.json", function(error,data){ console.log(data)
    })
  }
  
}
