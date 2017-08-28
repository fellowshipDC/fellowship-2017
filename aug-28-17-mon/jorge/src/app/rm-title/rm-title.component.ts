import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rm-title',
  templateUrl: './rm-title.component.html',
  styleUrls: ['./rm-title.component.styl']
})
export class RmTitleComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
