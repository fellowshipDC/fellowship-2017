import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.styl']
})
export class TitleComponent implements OnInit {

  @Input() 
    title: string;
  

  constructor() { }

  ngOnInit() {
  }

  setSize(pix){
    document.getElementById("titulo").style.fontSize = pix;
  }

}
