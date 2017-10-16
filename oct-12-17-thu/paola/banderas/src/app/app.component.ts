import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
      d3.select('svg')
      .attr('width', 150)
      .attr('height', 100)
      .style('background-color', 'white')
      .append('circle')
      .attr('cx', 75)
      .attr('cy', 50)
      .attr('r', 25)
      .attr('fill', 'red')
      .attr('stroke', 'red');
let sz;
  sz = d3.select('#suiza')
    .append('svg')
    .attr('width', 150)
    .attr('height', 100);
  sz.append('rect')
    .attr('width', 150)
    .attr('height', 100)
    .attr('fill', 'red');

  sz.append('rect')
    .attr('x', 50)
    .attr('y', 40)
    .attr('width', 55)
    .attr('height', 15)
    .attr('fill', 'white');
  sz
    .append('rect')
    .attr('x', 70)
    .attr('y', 20)
    .attr('width', 15)
    .attr('height', 55)
    .attr('fill', 'white');
    }
  }
