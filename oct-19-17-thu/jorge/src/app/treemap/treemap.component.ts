import { Component, OnInit } from '@angular/core';
import * as dbox from '@dboxjs/core';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.styl']
})
export class TreemapComponent implements OnInit {
  
  colors = ['#562B4F','#742C6A','#B23733','#DC8933'];  

  constructor() { }

  ngOnInit() {    
    var config = {
      'size':{
        'width':500,
        'height':400,
        'margin':{top: 0, right: 0, bottom: 0, left: 0},
      },
      'xAxis':{
        'enabled' : false
      },
      'yAxis': {
        'enabled' : false
      }
    };
    
    dbox.chart(config)
      .bindTo('#treemap')
      .data({'tsv':'/assets/treemap.tsv'})
      .layer(dbox.treemap)
      .nestBy(['variable','category','subcategory'])
      .size('number')
      .format(',.0f')
      .end()
      .draw();
  }

}
