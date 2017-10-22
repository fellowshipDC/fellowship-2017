import { Component, OnInit } from '@angular/core';
import * as dbox from '@dboxjs/core';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.styl']
})

export class ScatterComponent implements OnInit {

  config = {
    'size':{
      'width':960,
      'height':500,
      'margin':{top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis':{
      'scale' : 'linear'
    },
    'yAxis': {
      'scale' : 'linear'
    }
  };
  ngOnInit() {
    var chart = dbox.chart(this.config)
    .bindTo('#scatter')
    .data({'csv': './assets/scatter.csv'})
    .layer(dbox.scatter)
    .color('species')
    .x('sepalWidth')
    .y('sepalLength')
    .tip(function(d){
      console.log(d);
      return d.color + '\nx: ' + d.x + ', y:' + d.y;
      })
    .end()
    .draw();
  }
}
