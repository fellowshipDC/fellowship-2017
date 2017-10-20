import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';

  datos = [340, 50, 80, 120, 360, 470, 280, 20, 15, 260];

  ngOnInit(){
    d3.select('#circle')
    .selectAll('circle')
    .data(this.datos)
    .enter()
    .append("circle")
    .attr('cx', function(d,i){
      return i * (90) + 60;
    })
    .attr('cy', 150)
    .attr('r', function(d){
      return d / 10;
    })
    .attr('fill', '#777')
  }

  az(){
    d3.select('#circle')
      .selectAll('circle')
      .sort(function(a, b) {
                 return d3.ascending(a, b);
             })
      .transition()
      .delay(function(d, i) {
        return i * 50;
      })
      .duration(1000)
      .attr("cx", function(d, i) {
         return i* 90;
      });
  }

  za(){
    d3.select('#circle')
    .selectAll('circle')
    .sort(function(a, b) {
               return d3.descending(a, b);
           })
    .transition()
    .delay(function(d, i) {
      return i * 50;
    })
    .duration(1000)
    .attr("cx", function(d, i) {
       return i * 90 + 60;
    });
  }
}
