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

  ngOnInit() {
    d3.select('#d3').append('circle').attr('cx', this.datos[0]).attr('cy', this.datos[0])
    .attr('r', this.datos[0] / 5)
    .attr('fill', '#c23d45');
  }
}
