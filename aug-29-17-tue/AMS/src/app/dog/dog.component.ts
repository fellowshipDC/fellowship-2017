import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.styl']
})
export class DogComponent implements OnInit {

  breed: string;
  private sub: any;
  allPictures: any;

  constructor(private route: ActivatedRoute, private http: Http) { }

  getDog(raza){
    this.http.get("https://dog.ceo/api/breed/"+ raza + "/images").subscribe((res: Response) => this.allPictures = res.json());
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.breed = params['breed']});
    this.getDog(this.breed);
  }

}
