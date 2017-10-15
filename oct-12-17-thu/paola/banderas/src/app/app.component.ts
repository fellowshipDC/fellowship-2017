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
      d3.select('#suiz')
      .attr('width', 150)
      .attr('height', 100)
      .style('background-color', '#d2232c')
      .append('rect')
      .attr('x', 50)
      .attr('y', 35)
      .attr('width', 50)
      .attr('height', 20)
      .attr('fill', 'white')
      .append('rect')
      .attr('x', 20)
      .attr('y', 10)
      .attr('width', 50)
      .attr('height', 20)
      .attr('fill', 'black');
let sz;
  sz = d3.select('#suiza div')
    .append('svg')
    .attr('width', '400')
    .attr('height', '300');
  sz.append('rect')
    .attr('x', '150')
    .attr('y', '140')
    .attr('width', '100')
    .attr('height', '20')
    .style('fill', 'white');
  sz
    .append('rect')
    .attr('x', '190')
    .attr('y', '110')
    .attr('width', '20')
    .attr('height', '80')
    .style('fill', 'white');
    }
  }
