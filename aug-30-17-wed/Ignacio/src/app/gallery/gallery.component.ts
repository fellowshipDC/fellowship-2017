import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-image',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.styl']
})
export class GalleryComponent implements OnInit {
  breedsImage:object={};

  @Input()
  breed:string;
  
  constructor(private http:Http) { }
 
  getBreadr(breed) {
    this.http.get('https://dog.ceo/api/breed/'+breed+'/images/random').subscribe((res:Response)=>this.breedsImage=res.json());  
    } 
  ngOnInit() {
    this.getBreadr(this.breed)
    }
}
