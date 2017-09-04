import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

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
  }

}
