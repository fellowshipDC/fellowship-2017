import * as dbox from "dboxjs/core";

//var dbox = require ("dbox"),
   // timeline = require ("timeline");

 var config = {
    'bindTo':  '#chart',
    'size': {
      'width': 960,
      'height':500,
      'margin': { top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis':{
      'scale':'time'
    }
  }

var chart = dbox.chart(config)
      .data({'csv' : 'adata.csv'})
    .layer(dbox.timeline)
      .x('date')
      .series(['Airbus', 'Boeing'])
      .color('species')
    .end()
      .draw();
