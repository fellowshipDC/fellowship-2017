import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.styl']
})
export class ImagenComponent implements OnInit {

  imgObject: any;

  @Input()
    raza: string;

  constructor(private http: Http) { }

  getEachBreed(breed){
    this.http.get('https://dog.ceo/api/breed/'+ breed +'/images/random').subscribe((res: Response) => this.imgObject = res.json())
  }

  ngOnInit() {
    this.getEachBreed(this.raza)
  }

}
