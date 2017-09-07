import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router'

import * as d3 from 'd3';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.styl']
})
export class TableComponent implements OnInit {

  datos: object[];

  constructor(private router: Router, private http: Http) { }

  getDatos(){
   this.http.get('https://data.cityofchicago.org/resource/b6tt-rgti.json').subscribe((res: Response) => this.datos = res.json());
  }
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
      console.log(data);
      this.datos = data;
      });
    }
    goData(){
      this.router.navigateByUrl('/data');
    }

}
