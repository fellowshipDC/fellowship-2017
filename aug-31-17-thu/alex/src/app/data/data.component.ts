import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as d3 from 'd3';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.styl']
})
export class DataComponent implements OnInit {

  datos: object[];

  constructor(private http: Http) { }

  ngOnInit() {
    d3.json('https://data.cityofchicago.org/resource/b6tt-rgti.json', (error, data) => {
      // d3.select("#tabla")
      // .selectAll("p")
      // .data(data)
      // .enter()
      // .append("tr").style('border-color','black').style('border-width', '1px')
      // .text(function(d) {
      //     return d.purchase_order_description + ", " + d.purchase_order_contract_number + "," + d.city ;
      // });
      
      this.datos = data;
      });
  }

}
