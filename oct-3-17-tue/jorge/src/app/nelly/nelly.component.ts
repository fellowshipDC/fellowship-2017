import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-nelly',
  templateUrl: './nelly.component.html',
  styleUrls: ['./nelly.component.styl']
})
export class NellyComponent implements OnInit {

data;


  ngOnInit() {

    d3.csv('https://data.cityofchicago.org/resource/tt4n-kn4t.csv', (data) => {
      this.data = data;

      console.log(data);

    var svg=
        d3.select('div')
        .append('svg')
        .attr('width', 100+ '%')
        .attr('height', 100+ '%')
        .selectAll('circle')
        .data(this.data)
        .enter()
        .append('circle')
        .attr("cx", function (d: any) { return d.annual_salary/200 + 'px'; })
        .attr("cy", function (d: any) { return d.annual_salary/200 + 'px'; })
        .attr("r", function (d: any) { return d.annual_salary/5000 + 'px'; })
        .style("fill", "green");
    });


  }

}
