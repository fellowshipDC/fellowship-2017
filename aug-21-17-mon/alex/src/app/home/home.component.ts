import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  private header: string = 'Galería';
  
   
  
    private images: string[] = [
      'http://bucket2.glanacion.com/anexos/fotos/27/series-1421027w620.jpg',
      'https://ugc.kn3.net/i/origin/http://images4.fanpop.com/image/photos/16400000/Two-and-a-Half-Men-two-and-a-half-men-16493544-2000-1334.jpg',
      'http://bucket2.glanacion.com/anexos/fotos/27/series-1421027w620.jpg',
      'https://ugc.kn3.net/i/origin/http://images4.fanpop.com/image/photos/16400000/Two-and-a-Half-Men-two-and-a-half-men-16493544-2000-1334.jpg',
      'http://bucket2.glanacion.com/anexos/fotos/27/series-1421027w620.jpg',
      'http://bucket2.glanacion.com/anexos/fotos/27/series-1421027w620.jpg'
    ];
  constructor() { }

  ngOnInit() {
  }
  
  
    getHeader() {
      return this.header;
    }

  
    goToIMG(src) {
      console.log(src);
    }

}
