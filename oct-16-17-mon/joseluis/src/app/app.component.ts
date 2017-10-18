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
    
  barHeight = 20;
  
  totalwidth = 470;
  
  maximum = d3.max(this.datos);
  
  x = d3.scaleLinear()
        .domain([0, this.maximum])
        .range([0, this.totalwidth]);
  
  ngOnInit() {
   
    /* Bar Chart with D3 */
    
    var barChart = d3.select('#barChart')
      .attr('width', this.totalwidth)
      .attr('height', this.barHeight * this.datos.length);

    var bar = barChart.selectAll("g")
      .data(this.datos)
      .enter()
      .append("g")
      .attr("transform", function(d, i) { return "translate(10," + i * 30 + ")"; }); //20 es la altura de cada barra

    bar.append("rect")
      .attr("width", this.x)
      .attr("height", this.barHeight)
      .attr("fill", '#777');

    /* Bubble Chart with D3 */
    d3.select('#d3')
      .append('circle')
      .attr('cx', this.datos[0])
      .attr('cy', this.datos[0])
      .attr('r', this.datos[0] / 5)
      .attr('fill', '#c23d45');

  }; //ngOnInit ends
  
/** Sort button function for horizontal bar chart **/ 

  sorter(){
    d3.select('#barChart')
      .selectAll('rect')
      .sort(function(a:number,b:number) {
              return d3.ascending(a, b);
             })
      .attr("y", function(d, i) {
         return i * 25;
      });
  }; // Button function ends

}
