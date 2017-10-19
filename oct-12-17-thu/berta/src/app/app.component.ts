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
    d3.select('#japan svg')
      .attr('width', 300)
      .attr('height', 200)
      .style('background-color', 'white')
      .append('circle')
      .attr('cx', 150)
      .attr('cy', 100)
      .attr('r', 50)
      .attr('fill', 'red')
      .attr('stroke', 'red');

    
    var svgContainer = d3.select('#sweden svg')
                         .attr('width', 300)
                         .attr('height', 200)
                         .style('background-color', '#006BA3');
    svgContainer.append('rect')
                .attr('x', 70)
                .attr('y', 0)
                .attr('width', 30)
                .attr('height', 200)
                .attr('fill', '#FFCB43');
    svgContainer.append('rect')
                .attr('x', 0)
                .attr('y', 70)
                .attr('width', 300)
                .attr('height', 30)
                .attr('fill', '#FFCB43');

    var svgContainer = d3.select('#italy svg')
                         .attr('width', 300)
                         .attr('height', 200)
                         .style('background-color', 'white');
    svgContainer.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 100)
                .attr('height', 200)
                .attr('fill', '#00924F');
    svgContainer.append('rect')
                .attr('x', 200)
                .attr('y', 0)
                .attr('width', 100)
                .attr('height', 200)
                .attr('fill', '#D3283A');
  }

}
