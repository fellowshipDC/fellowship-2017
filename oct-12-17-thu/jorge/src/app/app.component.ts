import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    d3.select('svg')
    .attr('width', 300)
    .attr('height', 200)
    .style('background-color', 'white')
    .append('circle')
    .attr('cx', 150)
    .attr('cy', 100)
    .attr('r', 50)
    .attr('fill', 'red')
    .attr('stroke', 'red');
  }
}
