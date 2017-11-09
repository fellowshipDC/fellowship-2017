import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  colors = ['#562B4F','#742C6A','#B23733','#DC8933'];
  
  config = {
    'size':{
      'width':600,
      'height':600,
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
      .bindTo('#chart1')
      .data({'tsv':'app/assets/exampledata.tsv'})
    .layer(dbox.treemap)
      .nestBy(['variable','category','subcategory'])
      .size('number')
      .format(',.0f')
    .end()
      .draw();*
}
