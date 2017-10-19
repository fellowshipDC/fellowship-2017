import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.styl']
})
export class CirculoComponent implements OnInit {

datos = [340, 50, 80, 120, 360, 470, 280, 20, 15, 260];

  ngOnInit() {
    d3.select('#circle')
    .selectAll('circle')
    .data(this.datos)
    .enter()
    .append("circle")
    .attr('cx', function(d,i){
      return i * (800/10);
    })
    .attr('cy', function(d){
      return 600 - d;
    })

    .attr('r', function(d){
      return d/10;
    })
    .attr('fill', function(d){
      return "rgb(0, 0, " + (d) + ")";
    })


    var sortOrder = false;
    function sortBars(){
      sortOrder = !sortOrder;

      d3.select('#circle')
      .selectAll('circle')
      .sort(function(a, b) {
               if (sortOrder) {
                 return d3.ascending(a, b);
               } else {
                 return d3.descending(a, b);
               }
             })
            .transition()
            .delay(function(d, i) {
              return i * 50;
            })
            .duration(1000)
            .attr("cx", function(d, i) {
               return i* (800/10);
            });

       };
       d3.select("#sort").on('click', function(){
         sortBars();

    });
  }

}
