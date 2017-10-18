import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.styl']
})
export class GifsComponent implements OnInit {
  @Input()
  url: string;

  constructor() { }

  ngOnInit() {
  }

}
