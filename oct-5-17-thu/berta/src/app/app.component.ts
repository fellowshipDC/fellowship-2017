import { Component } from '@angular/core';
import * as dbox from "@dboxjs/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app';
}

var config = {
  'bindTo': '#chart',
  'size':{
    'width':960,
    'height':500,
    'margin':{top: 20, right: 20, bottom: 30, left: 40},
  },
  'xAxis':{
    'enabled':false
  },
  'yAxis':{
    'enabled':false
  }
}

var chart = dbox.chart(config)
    .data({'csv':'/assets/heatmap.csv'})
  .layer(dbox.heatmap)
    .x(["12", "13", "14", "15", "16", "17", "18","19","20","21","22","23","24","25","26+"])
    .y(["12", "13", "14", "15", "16", "17"].reverse())
    .colors(['#e2b136','#d79435', '#b03735','#7f2e60','#622b59'])
  .end()
    .draw();