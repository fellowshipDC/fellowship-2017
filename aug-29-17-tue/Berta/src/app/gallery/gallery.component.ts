import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: string;
  private sub: any;
  allPictures: object = {} ;
  perritos: object = {};
  response: object; 

  constructor(private route: ActivatedRoute, private http: Http) { }
  
  
  getDog(dogs){
    this.http.get("https://dog.ceo/api/breed/"+ dogs + "/images").subscribe((res: Response) => this.allPictures = res.json());
    this.perritos = (this.response as any).message;
  }


  ngOnInit() {
    this.route.params.subscribe(params => {this.images = params['breed']});
    this.getDog(this.images);
  }

}

