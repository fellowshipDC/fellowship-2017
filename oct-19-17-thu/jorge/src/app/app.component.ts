import { Component, OnInit } from '@angular/core';
import * as dbox from '@dboxjs/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';

  config = {
    'size': {
      'width': 1000,
      'height': 500,
      'margin': {top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis': {
      'scale': 'time'
    }
  };

  ngOnInit() {

    dbox.chart(this.config)
    .bindTo('#timeline')
    .data({'tsv': '/assets/timeline.tsv'})
    .layer(dbox.timeline)
    .x('date')
    .series(['Boeing'])
    .color('species')
    .end()
    .draw();

  }
}
