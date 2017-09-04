import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  breedImage: object = {};

  @Input()
  breed: string;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://dog.ceo/api/breed/'+this.breed+'/images/random')
    .subscribe((res: Response) => this.breedImage = res.json());
  } 

}
