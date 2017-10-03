import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.styl']
})
export class WhoComponent implements OnInit {

  @Input()
  url: string;

  constructor() { }

  ngOnInit() {
  }

}
