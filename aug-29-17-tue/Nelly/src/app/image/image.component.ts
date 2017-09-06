import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  private breed;
private dog: any;
private pictures: any;

  constructor( private route: ActivatedRoute, private http:  Http) { }

getDog(breed){
  this.http.get("https://dog.ceo/api/breed/"+ breed + "/images").subscribe((res: Response) => this.pictures = res.json());

}


  ngOnInit() {

    this.dog = this.route.params.subscribe(params => {this.breed = params ['breed']});
 this.getDog(this.breed);
  }

}
