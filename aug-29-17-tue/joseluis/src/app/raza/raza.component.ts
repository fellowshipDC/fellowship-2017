import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css']
})

export class RazaComponent implements OnInit { //Permite usar el componente fuera de sí mismo
  
  doggo : string; //propiedad string
  raza : any; //propiedad string
  razaImages : any; //pripiedad string

  constructor (private route : ActivatedRoute, private http : Http) { //Constructor para crear objeto

  }

  getRaza(raza){ //Método para iniciar la instancia del url
    this.http.get('https://dog.ceo/api/breed/' + raza + '/images') //hace el request a la API (JSON)
    .subscribe((res : Response) => this.razaImages = res.json()); //Magia negra, checar subscribe y res
  }

  ngOnInit() { //Método que modifica la instancia url
    this.route.params.subscribe(params => { this.doggo = params['doggo']}); 
    this.getRaza(this.doggo);
    console.log(this.doggo);
  };

}