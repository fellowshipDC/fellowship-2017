import { Component } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app';

  datos = [340, 50, 80, 120, 360, 470, 280, 20, 15, 260];

ngOnInit(){

  //barras normales

  d3.select('#bars')
  .selectAll('rect')
  .data(this.datos)
  .enter()
  .append("rect")
  .attr('x', function(d,i){
    return i * (800/10);
  })
  .attr('y', function(d){
    return 600 - d;
  })
  .attr('width', '30')
  .attr('height', function(d){
    return d;
  })
  .attr('fill', function(d){
    return "rgb(0, 0, " + (d) + ")";
  })


  var sortOrder = false;
  function sortBars(){
    sortOrder = !sortOrder;

    d3.select('#bars')
    .selectAll('rect')
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
          .attr("x", function(d, i) {
             return i* (800/10);
          });

     };
     d3.select("#sorts").on('click', function(){
       sortBars();

  });
}




}
