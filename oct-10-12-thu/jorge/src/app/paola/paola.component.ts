import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-paola',
  templateUrl: './paola.component.html',
  styleUrls: ['./paola.component.styl']
})
export class PaolaComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    d3.select('svg')
    .attr('width', 150)
    .attr('height', 100)
    .style('background-color', '#006AA7')
    
  }


}
