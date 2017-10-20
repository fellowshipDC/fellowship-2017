import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'Banderas';

  ngOnInit(){

    var japan = 
      d3.select('#japan');

      var jp = 
      japan.append('g') //'g' groups SVG shapes together
        .append('svg')
        .attr('width', 150)
        .attr('height', 100);

      jp.append('rect')
        .attr('fill','#fff')
        .attr('width',150)
        .attr('height', 100);

      jp.append('circle')
        .attr('cx',75)
        .attr('cy',50)
        .attr('r',30)
        .attr('fill','#BC002D');

    var suiza =
      d3.select('#suiza');

      var sz = suiza
        .append('svg')
        .attr('width', 150)
        .attr('height', 100);

      sz.append('rect')
        .attr('width', 150)
        .attr('height', 100)
        .attr('fill','#D52B1E');

      sz.append('rect')
        .attr('width', 50)
        .attr('height', 16)
        .attr('fill','#FFF')
        .attr('x',50)
        .attr('y',42);

      sz.append('rect')
        .attr('width', 16)
        .attr('height', 50)
        .attr('fill','#FFF')
        .attr('x',67)
        .attr('y',25);

    var suecia = 
      d3.select('#suecia');

    var sc = suecia
      .append('g')
      .append('svg')
      .attr('width', 150)
      .attr('height', 100);

    sc.append('rect')
      .attr('width', 150)
      .attr('height', 100)
      .attr('fill','#006aa7');

    sc.append('rect')
      .attr('width', 20)
      .attr('height', 100)
      .attr('fill','#fecc00')
      .attr('x',50);

    sc.append('rect')
      .attr('width', 150)
      .attr('height', 20)
      .attr('fill','#fecc00')
      .attr('y', 40);

    var jamaica = d3.select('#jamaica');

    var jmc = jamaica
    .append('g')
    .append('svg')
    .attr('width', 150)
    .attr('height', 100);

    jmc.append('rect')
    .attr('width', 150)
    .attr('height', 100)
    .attr('fill','#009B3A');

    jmc.append('path')
      .attr('stroke','#FED100')
      .attr('stroke-width', '8')
      .attr('d','M0 0 L75 47 L0 100');

    jmc.append('path')
      .attr('stroke','#FED100')
      .attr('stroke-width', '8')
      .attr('d','M150 0 L75 47 L150 100');

    var italia = d3.select('#italia');

    var tl = italia
      .append('g')
      .append('svg')
      .attr('width', 150)
      .attr('height', 100)
      .attr('viewBox',"0 0 3 2");

      tl.append('rect')
        .attr('width', '1')
        .attr('height', '2')
        .attr('x','0')
        .attr('fill',"#008d46");

      tl.append('rect')
        .attr('width', '1')
        .attr('height', '2')
        .attr('x','1')
        .attr('fill',"#fff");

      tl.append('rect')
        .attr('width', '1')
        .attr('height', '2')
        .attr('x','2')
        .attr('fill',"#d2232c");

    var noruega = d3.select('#noruega');

    var nrg = noruega
      .append('svg')
      .attr('width', 150)
      .attr('height', 100);

      nrg.append('rect')
        .attr('fill', '#EF2B2D')
        .attr('width',150)
        .attr('height',100);

      nrg.append('rect')
        .attr('fill', '#fff')
        .attr('width',20)
        .attr('height',100)
        .attr('x',40);

      nrg.append('rect')
        .attr('fill', '#fff')
        .attr('width',150)
        .attr('height',20)
        .attr('y',40);

      nrg.append('rect')
        .attr('fill', '#002868')
        .attr('width',10)
        .attr('height',100)
        .attr('x',45);

      nrg.append('rect')
        .attr('fill', '#002868')
        .attr('width',150)
        .attr('height',10)
        .attr('y',45);

    var palestina = d3.select('#palestina');

    var plstn = palestina
      .append('svg')
      .attr('width',150)
      .attr('height',100);

      plstn.append('rect')
        .attr('width',150)
        .attr('height', 100)
        .attr('fill', '#000');

      plstn.append('rect')
        .attr('y', 33.33)
        .attr('width',150)
        .attr('height', 33.33)
        .attr('fill', '#fff');

      plstn.append('rect')
        .attr('y', 66.66)
        .attr('width',150)
        .attr('height', 33.33)
        .attr('fill', '#007a3d');

      plstn.append('path')
      .attr('fill','#CE1126')
      .attr('d','M0 0 L47 47 L0 100');

    var botswana = d3.select('#botswana');
    
    var btswn = botswana
      .append('svg')
      .attr('width',150)
      .attr('height',100);

      btswn.append('rect')
      .attr('width',150)
      .attr('height', 100)
      .attr('fill', '#75AADB');

      btswn.append('rect')
      .attr('y', 37.5)
      .attr('width',150)
      .attr('height', 25)
      .attr('fill', '#fff');

      btswn.append('rect')
      .attr('y', 41)
      .attr('width',150)
      .attr('height', 18)
      .attr('fill', '#000');

    var tonga = d3.select('#tonga');
      
    var tng = tonga
        .append('svg')
        .attr('width',200)
        .attr('height',100);
  
        tng.append('rect')
        .attr('width',200)
        .attr('height', 100)
        .attr('fill', '#C10000');

        tng.append('rect')
        .attr('width',80)
        .attr('height', 50)
        .attr('fill', '#fff');
  
        tng.append('rect')
        .attr('y', 19)
        .attr('x', 25)
        .attr('width',30)
        .attr('height',12)
        .attr('fill', '#C10000');
  
        tng.append('rect')
        .attr('y', 10)
        .attr('x', 34)
        .attr('width',12)
        .attr('height', 30)
        .attr('fill', '#C10000');

    var marruecos = d3.select('#marruecos');
    
    var mrrc = marruecos
        .append('g')
        .append('svg')
        .attr('width', 150)
        .attr('height', 100);
    
        mrrc.append('rect')
        .attr('width', 150)
        .attr('height', 100)
        .attr('fill','#C1272D');
    
        mrrc.append('path')
          .attr('stroke','#006233')
          .attr('stroke-width', '3')
          .attr('fill', 'none')
          .attr('d','M60,50 h30 l-24.27,17.63 9.27,-28.53 9.27,28.53 z');

    var vietnam = d3.select('#vietnam');
    
    var vtnm = vietnam
        .append('g')
        .append('svg')
        .attr('width', 150)
        .attr('height', 100);

        vtnm.append('rect')
        .attr('width', 150)
        .attr('height', 100)
        .attr('fill','#DA251D');

        vtnm.append('path')
        .attr('fill', '#FFFF00')
        .attr('d','M60,50 h33 l-26.697,19.393 10.197,-31.383 10.197,31.383 z');

    var cuba = d3.select('#cuba');

    var cb = cuba
      .append('g')
      .append('svg')
      .attr('width', 180)
      .attr('height', 100);

      cb.append('rect')
      .attr('width',180)
      .attr('height', 20)
      .attr('fill', '#002A8F');

      cb.append('rect')
      .attr('y', 20)
      .attr('width',180)
      .attr('height', 20)
      .attr('fill', '#fff');

      cb.append('rect')
      .attr('y', 40)
      .attr('width',180)
      .attr('height', 20)
      .attr('fill', '#002A8F');

      cb.append('rect')
      .attr('y', 60)
      .attr('width',180)
      .attr('height', 20)
      .attr('fill', '#fff');

      cb.append('rect')
      .attr('y', 80)
      .attr('width',180)
      .attr('height', 20)
      .attr('fill', '#002A8F');

      cb.append('path')
      .attr('fill', '#CF142B')
      .attr('d','M0 0 L65 50 L0 100');

      cb.append('path')
      .attr('fill', '#FFF')
      .attr('d','M7.5,45 h30 l-24.27,17.63 9.27,-28.53 9.27,28.53 z');
    
  }

}
