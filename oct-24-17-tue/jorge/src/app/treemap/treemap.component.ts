import { Component, OnInit } from '@angular/core';
import * as dbox from '@dboxjs/core';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.styl']
})
export class TreemapComponent implements OnInit {

  constructor() { }

  config = {
    'size': {
      'width': 1000,
      'height': 500,
      'margin': {top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis':{
      'enabled' : false
    },
    'yAxis': {
      'enabled' : false
    }
  };

  ngOnInit() {

    dbox.chart(this.config)
    .bindTo('#chart')
    .data({'csv': '/assets/movies.csv'})
    .layer(dbox.treemap)
    .nestBy(['vote_average', 'budget'])
    .size('vote_count')
    .format(',.0f')
    .end()
    .draw();

  }

}
