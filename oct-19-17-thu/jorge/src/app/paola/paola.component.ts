import { Component, OnInit } from '@angular/core';
import * as dbox from '@dboxjs/core';

@Component({
  selector: 'app-paola',
  templateUrl: './paola.component.html',
  styleUrls: ['./paola.component.styl']
})
export class PaolaComponent implements OnInit {

  config = {
    'size': {
      'width': 1200,
      'height': 700,
      'margin': {top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis': {
      'scale': 'time'
    }
  };

  ngOnInit() {
    dbox.chart(this.config)
    .bindTo('#time')
    .data({'csv': '/assets/data.csv'})
    .layer(dbox.timeline)
    .x('date')
    .series(['number of deaths'])
    .end()
    .draw();
  }

}
