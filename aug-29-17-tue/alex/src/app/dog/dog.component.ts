import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  breed: string;
  private sub: any;
  imagesDogs: object = {};

  constructor(private route: ActivatedRoute, private http: Http) { }

  getDog(dog){
    this.http.get("https://dog.ceo/api/breed/"+ dog + "/images").subscribe((res: Response) => this.imagesDogs = res.json());
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.breed = params['breed']});
    this.getDog(this.breed);
  }

}
