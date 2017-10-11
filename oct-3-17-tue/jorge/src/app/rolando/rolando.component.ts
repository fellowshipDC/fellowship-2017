import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-rolando',
  templateUrl: './rolando.component.html',
  styleUrls: ['./rolando.component.styl']
})
export class RolandoComponent implements OnInit {


  data;

  ngOnInit(){
    d3.csv('https://data.cityofchicago.org/resource/tt4n-kn4t.csv',( data ) => {
      this.data = data;

      var svgContainer = d3.select("div")
                          .append('svg')
                          .attr("width", 100+'%')
                          .attr("height", 100+'%');

      var circles = svgContainer
                .selectAll('circle')
                .data(this.data)
                .enter()
                .append("circle");      // attach a circle



      var attributes =  circles
                .attr("r", function(d: any){ return d.annual_salary / 5000 ;})             // set the radius
                .attr("cx", function(d: any){ return d.annual_salary / 300 ; })           // position the x-centre
                .attr("cy", function(d: any){ return d.annual_salary / 300 ; })           // position the y-centre
                .style("fill", "red")
                .style("stroke", "red") ;
    });

}
}
