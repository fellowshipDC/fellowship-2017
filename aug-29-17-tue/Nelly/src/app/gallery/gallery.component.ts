import { Component, OnInit, Input } from '@angular/core';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  breedImage: object={};
  @Input()
  breed:string;

  constructor(private http: Http) { }

  getEachBreed(breed){
    this.http.get('https://dog.ceo/api/breed/'+ breed +'/images/random').subscribe((res: Response) => this.breedImage = res.json())
  }

  ngOnInit() {
    this.getEachBreed(this.breed)
  }

}
