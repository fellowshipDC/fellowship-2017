import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  //data = [10, 20, 30, 40, 50, 60];
  data;

  ngOnInit() {

    /* Repaso */

    d3.csv('https://data.cityofchicago.org/resource/tt4n-kn4t.csv', (data) => {
      this.data = data;
      console.log(data);

      d3.select('div')
      .selectAll('p')
      .data(this.data)
      .enter()
      .append('p')
      .text(function(d: any) { return d.annual_salary; })
      .style('font-size', function(d: any) { return d.annual_salary / 300 + 'px'; })
      .style('color', 'red');
    });

    /*d3.select('p')
      .style('color', 'red')
      .attr('class', 'text')
      .data(['1', '2'])
      .enter()
      .exit()
      .append('p');*/
  }

}
