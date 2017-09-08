import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  breedImage: object = {};
  onePicture: object = {};
  dogPicture: object = {};
  response: object;

  @Input()
  breed: string;

  constructor(private http: Http) { } 

  ngOnInit() {
    this.http.get('https://dog.ceo/api/breed/'+this.breed+'/images/random').subscribe((res: Response) => this.breedImage = res.json());
    this.dogPicture = (this.response as any).message;
  
  }

}
