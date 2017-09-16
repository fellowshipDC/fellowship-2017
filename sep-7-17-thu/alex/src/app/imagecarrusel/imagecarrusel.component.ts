import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagecarrusel',
  templateUrl: './imagecarrusel.component.html',
  styleUrls: ['./imagecarrusel.component.styl']
})
export class ImagecarruselComponent implements OnInit {

  @Input()
  url: string;

  constructor() { }

  ngOnInit() {
  }

}
