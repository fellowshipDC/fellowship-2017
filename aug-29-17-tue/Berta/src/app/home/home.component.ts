import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'; //Se importa la clase

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breeds: object = {};
  onePicture: any;
  dogName: object = {};
  response: object;

  constructor(private http: Http) { } // escribir http


  getBreeds(){
    this.http.get('https://dog.ceo/api/breeds/list').subscribe((res: Response) => this.breeds = res.json());
    this.dogName = (this.response as any).message;
  
    }

  ngOnInit() {
    this.getBreeds(); 
  }

  open(breedName) {
    console.log(breedName);
  }

}
