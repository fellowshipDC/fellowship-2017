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


  /*config = {
    'size': {
      'width': 1000,
      'height': 500,
      'margin': {top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis': {
      'scale': 'time'
    }
  };*/

  ngOnInit() {

    var chart = dbox.chart(this.config)
    .bindTo('#chart')
        .data({'csv':'./assets/moviesfilter.csv'})
      .layer(dbox.heatmap)
      .y(["49","149","199","249","299","399"])
      //.y(["12", "13", "14", "15", "16", "17"].reverse())
      //.x(["12", "13", "14", "15", "16", "17", "18","19","20","21","22","23","24","25","26+"])
     .x(["5","6", "7","8"])
      .colors(['#e2b136','#d79435', '#b03735','#7f2e60','#622b59'])
      .end()
        .draw();


      //  [1,2,3,4] - vote count -> x, y
      // [1,2 3, 4] - avg-vote

  /*  dbox.chart(this.config)
    .bindTo('#timeline')
    .data({'tsv': '/assets/timeline.tsv'})
    .layer(dbox.timeline)
    .x('date')
    .series(['Boeing'])
    .color('species')
    .end()
    .draw();

  }*/
}
}
