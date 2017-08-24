import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'Glosary';
  healthcare: object;

  constructor(private http: Http){}

  // GET - HTTP Method
  
  getHealthcare() {
    this.http.get(
      "https://www.healthcare.gov/api/glossary.json"

  //Método Suscribe para petición y respuesta
).subscribe((res: Response) => this.healthcare = res.json());
  }

  //Método para imprimir
 ngOnInit(){
   this.getHealthcare();
  
}
   

  }
