import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.styl']
})
export class ImageComponent implements OnInit {

  @Input()
  imgurl: string;

  constructor() { }

  ngOnInit() {
  }

}
