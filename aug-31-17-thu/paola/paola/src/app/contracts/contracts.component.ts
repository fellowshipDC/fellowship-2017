import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as d3 from 'd3';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  private data: string;
  tabla: object;

  constructor() {}
  
  ngOnInit() {
    d3.json('https://data.cityofchicago.org/resource/ydr8-5enu.json',
    (error, data) => this.tabla = (data));
  }
}
