import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.styl']
})
export class BreedComponent implements OnInit {
  dog:string;
  private raza:any;
  razaImages:any;

  constructor(private route: ActivatedRoute, private  http:Http) { }

  getRaza(breed){
    this.http.get( 'https://dog.ceo/api/breed/'+breed+'/images').subscribe((res:Response)=>this.razaImages=res.json());
    
  }
  ngOnInit() {
    this.route.params.subscribe(params => { this.dog = params['breed']});
    this.getRaza(this.dog);
  };
}
