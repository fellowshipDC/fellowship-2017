import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as d3 from 'd3';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.styl']
})
export class TableComponent implements OnInit {

  datos: object[];

  constructor(private http: Http) { }

  getDatos(){
   this.http.get('https://data.cityofchicago.org/resource/b6tt-rgti.json').subscribe((res: Response) => this.datos = res.json());
  }
  ngOnInit() {
    d3.json('https://data.cityofchicago.org/resource/b6tt-rgti.json', function(error, data) {
      d3.select("body")
      .selectAll("p")
      .data(data)
      .enter()
      .append("p")
      .text(function(d) {
          return d.purchase_order_description + ", " + d.purchase_order_contract_number;
      });   
    });
    d3.select("body").append("p").text("New paragraph!");
    }

}
