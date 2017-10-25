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

    var panama = d3.select('#panama');

      var pn = panama
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      pn.append('rect')
        .attr('width', 125)
        .attr('height', 75)
        .attr('fill','#005293')
        .attr('x', 0)
        .attr('y', 75);

      pn.append('rect')
        .attr('width', 125)
        .attr('height', 75)
        .attr('fill','#D21034')
        .attr('x', 125)
        .attr('y', 0);

      pn.append('path')
        .attr('fill', '#D21034')
        .attr('d', 'M 187 100 L 178 125 L 201 109 L173 109 L 196 125');

      pn.append('path')
        .attr('fill', '#005293')
        .attr('d', 'M 62 25 L 53 50 L 76 34 L 48 34 L 71 50');

    var vietnam = d3.select('#vietnam');

      var vt = vietnam
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      vt.append('rect')
        .attr('width', 250)
        .attr('height', 150)
        .attr('fill','#DA251D');
        
      vt.append('path')
        .attr('fill', '#FFFF00')
        .attr('d', 'M 125 38 L 100 110 L 164 65 L 85 65 L 150 110');

    var cuba = d3.select('#cuba');

      var cb = cuba
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      cb.append('rect')
        .attr('width', 250)
        .attr('height', 30)
        .attr('fill','#002A8F')

      cb.append('rect')
        .attr('width', 250)
        .attr('height', 30)
        .attr('fill','#ffffff')
        .attr('x', 0)
        .attr('y', 30);

      cb.append('rect')
        .attr('width', 250)
        .attr('height', 30)
        .attr('fill','#002A8F')
        .attr('x', 0)
        .attr('y', 60);

      cb.append('rect')
        .attr('width', 250)
        .attr('height', 30)
        .attr('fill','#ffffff')
        .attr('x', 0)
        .attr('y', 90);

      cb.append('rect')
        .attr('width', 250)
        .attr('height', 30)
        .attr('fill','#002A8F')
        .attr('x', 0)
        .attr('y', 120);

      cb.append('path')
        .attr('fill', '#CF142B')
        .attr('d', 'M 0 0 L 100 75 L 0 150');

      cb.append('path')
        .attr('fill', '#ffffff')
        .attr('d', 'M 34 53 L 22 91 L 52 68 L 16 68 L 46 91');

    var italia = d3.select('#italia')

      var tl = italia
        .append('svg')
        .attr('width', 250)
        .attr('height', 150);

      tl.append('rect')
        .attr('width', 83.3)
        .attr('height', 150)
        .attr('fill','#009246');

      tl.append('rect')
        .attr('width', 83.3)
        .attr('height', 150)
        .attr('fill','#ffffff')
        .attr('x', 83.3)
        .attr('y', 0);

      tl.append('rect')
        .attr('width', 83.3)
        .attr('height', 150)
        .attr('fill','#CE2B37')
        .attr('x', 166.6)
        .attr('y', 0);
  }
}
