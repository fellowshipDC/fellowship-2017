import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    var suiza = d3.select('#suiza');

      var sz = suiza
        .append('svg')
        .attr('width', 250) 
        .attr('height', 150);
      
      sz.append('rect')
        .attr('width', 250)
        .attr('height',150)
        .attr('fill','#E81B00');

      sz.append('rect')
        .attr('width', 100)
        .attr('height',30)
        .attr('fill','#ffffff')
        .attr('x', 75)
        .attr('y', 60);

      sz.append('rect')
        .attr('width', 30)
        .attr('height',100)
        .attr('fill','#ffffff')
        .attr('x', 110)
        .attr('y', 25);

    var suecia = d3.select('#suecia');

      var sc = suecia
        .append('svg')
        .attr('width', 250) 
        .attr('height', 150);

      sc.append('rect')
        .attr('width', 250)
        .attr('height',150)
        .attr('fill','#006AA7');

      sc.append('rect')
        .attr('width', 250)
        .attr('height',30)
        .attr('fill','#FECC00')
        .attr('x', 0)
        .attr('y', 60);

      sc.append('rect')
        .attr('width', 30)
        .attr('height',150)
        .attr('fill','#FECC00')
        .attr('x', 70)
        .attr('y', 0);

    var jamaica = d3.select('#jamaica');

      var jm = jamaica
        .append('svg')
        .attr('width', 250) 
        .attr('height', 150);

      jm.append('rect')
        .attr('width', 250) 
        .attr('height', 150)
        .attr('fill', '#009B3A');

      jm.append('path')
        .attr('stroke','#FED100')
        .attr('stroke-width', 16)
        .attr('d', 'M 0 0 L 125 75 L 0 150'); 
      
      jm.append('path')
        .attr('stroke', '#FED100')
        .attr('stroke-width', 16)
        .attr('d', 'M 250 0 125 75 L 250 150');
          
    var noruega = d3.select('#noruega');

      var nr = noruega
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      nr.append('rect')
        .attr('width', 250)
        .attr('height', 150)
        .attr('fill', '#002868');

      nr.append('rect')
        .attr('width', 84)
        .attr('height', 74)
        .attr('fill', "#EF2B2D")
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 9)
        .attr('x', -12)
        .attr('y', -12);
      
      nr.append('rect')
        .attr('width', 170)
        .attr('height', 74)
        .attr('fill', '#EF2B2D')
        .attr('stroke','#ffffff')
        .attr('stroke-width', 9)
        .attr('x', 98)
        .attr('y', -12);
    
      nr.append('rect')
        .attr('width', 84)
        .attr('height', 74)
        .attr('fill','#EF2B2D')
        .attr('stroke','#ffffff')
        .attr('stroke-width', 9)
        .attr('x', -12)
        .attr('y', 88);
    
      nr.append('rect')
        .attr('width', 170)
        .attr('height', 74)
        .attr('fill','#EF2B2D')
        .attr('stroke','#ffffff')
        .attr('stroke-width', 9)
        .attr('x', 98)
        .attr('y', 88);
    
    var botswana = d3.select('#botswana');
      
      var bt = botswana
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      bt.append('rect')
        .attr('width', 250)
        .attr('height', 150)
        .attr('fill', '#75AADB');

      bt.append('rect')
        .attr('width', 264)
        .attr('height', 34)
        .attr('fill','#000000')
        .attr('stroke','#ffffff')
        .attr('stroke-width', 6)
        .attr('x', -8)
        .attr('y', 58);

    var palestina = d3.select('#palestina');

      var pl = palestina
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      pl.append('rect')
        .attr('width', 250)
        .attr('height', 50)
        .attr('fill','#000000')
        .attr('x', 0)
        .attr('y', 0);

      pl.append('rect')
        .attr('width', 250) 
        .attr('height', 50)
        .attr('fill','#ffffff')
        .attr('x', 0)
        .attr('y', 50);

      pl.append('rect')
        .attr('width', 250)
        .attr('height', 50)
        .attr('fill','#007A3D')
        .attr('x', 0)
        .attr('y', 100);

      pl.append('path')
        .attr('stroke', '#CE1126')
        .attr('stroke-width', 2)
        .attr('fill', '#CE1126')
        .attr('d', 'M 0 0 L 75 75 L 0 150');

    var tonga = d3.select('#tonga');

      var tn = tonga
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      tn.append('rect')
        .attr('width', 250)
        .attr('height', 150)
        .attr('fill','#E81B00')

      tn.append('rect')
        .attr('width', 100)
        .attr('height', 75)
        .attr('fill','#ffffff')
        .attr('x', 0)
        .attr('y', 0);
      
      tn.append('rect')
        .attr('width', 50)
        .attr('height', 18)
        .attr('fill','#E81B00')
        .attr('x', 25)
        .attr('y', 28.5);

      tn.append('rect')
        .attr('width', 18)
        .attr('height', 50)
        .attr('fill','#E81B00')
        .attr('x', 41)
        .attr('y', 12.5);

    var marruecos = d3.select('#marruecos')

      var mrr = marruecos
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      mrr.append('rect')
        .attr('width', 250)
        .attr('height', 150)
        .attr('fill','#C1272D');

      mrr.append('path')
        .attr('stroke', '#006233')
        .attr('stroke-width', 4)
        .attr('fill', '#C1272D')
        .attr('d', 'M 125 50 L 110 97 L 147 69 L 100 69 L 140 97 L 124 50');
  }
}
