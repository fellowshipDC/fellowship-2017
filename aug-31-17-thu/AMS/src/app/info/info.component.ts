import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as d3 from "d3";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.styl']
})
export class InfoComponent implements OnInit {

  dataSet: any;

  constructor(private http: Http) { }

 
  ngOnInit() {
    this.getData();
  }
  //Petición mediante D3 para acomodar los datos y almacenarlos en la variable definida dataSet
  getData() {
    d3.json("https://data.cityofchicago.org/resource/b6tt-rgti.json", (error, data) => {
      this.dataSet = data;
    });
  }
}
