import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({ //decorador
  selector: 'app-gallery', //identificador para usarlo externamente
  templateUrl: './gallery.component.html', //donde hallar el HTML del componente
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit { //Permite usar el componente fuera de si mismo
  
  razasImage? : any; //propiedad

  @Input()

  raza : string; //Pasa "raza" de gallery a los demás componentes

  constructor(private http : Http) {

  }

  getRaza(razas){
  this.http.get('https://dog.ceo/api/breed/' + razas + '/images/random') //Hace el request Http
  .subscribe((res:Response) => this.razasImage = res.json());    
  }

  ngOnInit() {
    this.getRaza(this.raza)
  }
}
