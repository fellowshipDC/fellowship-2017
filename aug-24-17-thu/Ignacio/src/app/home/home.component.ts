import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  private title:string="Lord Commander of the Night's Watch";
  characters:object;
  
  constructor(private http:Http) { }
  
  getCharacters() {
    this.http.get('https://anapioficeandfire.com/api/characters/583',
         {
           params:{
             'name':'name'
           }
    
          } ).subscribe((res:Response)=> this.characters = res.json());
    };

    ngOnInit() {
    this.getCharacters();
     }
  

   getTitle(){
    return this.title;
  }
}
 

