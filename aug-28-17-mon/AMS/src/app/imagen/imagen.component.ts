import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.styl']
})
export class ImagenComponent implements OnInit {

  @Input() 
    url: string;
    
  constructor() { }

  ngOnInit() {
  }

}
