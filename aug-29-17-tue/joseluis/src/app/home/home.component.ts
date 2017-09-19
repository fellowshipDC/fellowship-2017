import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  razas : object={};
  fotosperritos? : any;

  constructor(private http:Http) { }
  
  getRazas(){
    this.http.get('https://dog.ceo/api/breeds/list').subscribe((res:Response)=>this.razas = res.json());
  }
 
  ngOnInit(){
    this.getRazas();
  }

}