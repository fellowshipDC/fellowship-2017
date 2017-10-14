import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  
  ngOnInit(){
    var sz, sc, ja, jp, it, no, pa, bot, ton, mar, pn, viet, cu;
            
//Suiza
              sz = d3.select('#suiza')
                .append('svg')
                .attr('width', '400')
                .attr('height', '300');
              sz.append('rect')
                .attr('x','150')
                .attr('y','140')
                .attr('width','100')
                .attr('height','20')
                .style("fill", "white");
              sz
                .append('rect')
                .attr('x', '190')
                .attr('y', '110')
                .attr('width', '20')
                .attr('height', '80')
                .style('fill','white');
//Suecia
              sc = d3.select('#suecia')
                .append('svg')
                .attr('width', '400')
                .attr('height', '300');

              sc.append('rect')
                .attr('x', '0')
                .attr('y', '100')
                .attr('height', '20')
                .attr('width','400')
                .attr('fill', '#FBD200');
              sc.append('rect')
                .attr('x', '100')
                .attr('y', '0')
                .attr('height', '300')
                .attr('width', '20')
                .attr('fill', '#FBD200');
//Jamaica
              ja = d3.select('#jamaica')
                .append('svg')
                .attr('width', '400')
                .attr('height', '300');

                ja.append('line')
                .attr('x1','0')
                .attr('y1','0')
                .attr('x2','400')
                .attr('y2','300')
                  .style('stroke','#F8E700')
                  .style('stroke-width','20');

                ja.append('line')
                  .attr('x1', '400')
                  .attr('y1', '0')
                  .attr('x2', '0')
                  .attr('y2', '300')
                  .style('stroke', '#F8E700')
                  .style('stroke-width', '20');

                ja.append('polygon')
                  .attr('points','0,10, 190,150, 0,290');

                ja.append('polygon')
                  .attr('points', '400,10, 210,150, 400,290');

//Japón

              jp = d3.select('#japon')
               .append('svg')
               .attr('width', '400')
               .attr('height', '300');

               jp.append('circle')
                 .attr('cx','200')
                 .attr('cy','150')
                 .attr('r','50')
                 .style('fill','red');

//Italia

              it = d3.select('#italia')
                .append('svg')
                .attr('width', '400')
                .attr('height', '300');

                it.append('rect')
                .attr('x','0')
                .attr('y','0')
                .attr('width','133.3')
                .attr('height','300')
                .style('fill','green');

                it.append('rect')
                  .attr('x', '133.3')
                  .attr('y', '0')
                  .attr('width', '133.4')
                  .attr('height', '300')
                  .style('fill', 'white');

                it.append('rect')
                  .attr('x', '266.7')
                  .attr('y', '0')
                  .attr('width', '133.3')
                  .attr('height', '300')
                  .style('fill', 'red');

          
//Noruega

              no = d3.select('#noruega')
                .append('svg')
                .attr('width', '400')
                .attr('height', '300');

                no.append('rect')
                  .attr('x','100')
                  .attr('y','0')
                  .attr('width','60')
                  .attr('height','300')
                  .style('fill','white');

                no.append('rect')
                  .attr('x','0')
                  .attr('y','100')
                  .attr('width','400')
                  .attr('height','60')
                  .style('fill','white');

                no.append('rect')
                  .attr('x','115')
                  .attr('y','0')
                  .attr('width','30')
                  .attr('height','300')
                  .style('fill','#22006B');

                no.append('rect')
                  .attr('y', '115')
                  .attr('x', '0')
                  .attr('height', '30')
                  .attr('width', '400')
                  .style('fill', '#22006B');
          
//Panamá

    pn = d3.select('#panama')
      .append('svg')
      .attr('width', '400')
      .attr('height', '300');

      pn.append('path')
        .attr('transform','translate(100,82.5) scale(25,25) ')
        .attr('d','M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z')
        .style('fill','blue');

      pn.append('path')
        .attr('transform', 'translate(300,207.5) scale(25,25) ')
        .attr('d', 'M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z')
        .style('fill', 'red');

      pn.append('rect')
        .attr('x', '0')
        .attr('y', '150')
        .attr('width', '200')
        .attr('height', '150')
        .style('fill', 'blue');
      
      pn.append('rect')
        .attr('x', '200')
        .attr('y', '0')
        .attr('width', '200')
        .attr('height', '150')
        .style('fill', 'red');



        //Palestina

      pa = d3.select('#palestina')
        .append('svg')
        .attr('width', '400')
        .attr('height', '300');



      pa.append('rect')
        .attr('x', '0')
        .attr('y', '0')
        .attr('width', '400')
        .attr('height', '100')
        .style('fill', 'black');

      pa.append('rect')
        .attr('x', '0')
        .attr('y', '100')
        .attr('width', '400')
        .attr('height', '100')
        .style('fill', 'white');

      pa.append('rect')
        .attr('x', '0')
        .attr('y', '200')
        .attr('width', '400')
        .attr('height', '100')
        .style('fill', 'green');

      pa.append('polygon')
        .attr('points', '0,0, 180,150, 0,300')
        .style('fill','#FF0000');
//Botswana

    bot = d3.select('#botswana')
      .append('svg')
      .attr('width', '400')
      .attr('height', '300');

    bot.append('rect')
    .attr('x','0')
    .attr('y','125')
    .attr('width','400')
    .attr('height','50')
    .style('fill','white');

    bot.append('rect')
      .attr('x', '0')
      .attr('y', '135')
      .attr('width', '400')
      .attr('height', '30')
      .style('fill', 'black');

//Tonga

    ton = d3.select('#tonga')
      .append('svg')
      .attr('width', '400')
      .attr('height', '300');

//Marruecos
              
    mar = d3.select('#marruecos')
      .append('svg')
      .attr('width', '400')
      .attr('height', '300');

    mar.append('polygon')
      .attr('points', "175,160, 230,125, 170,125, 225,160, 200,105")
      .style('fill','none')
      .style('stroke-width','5')
      .style('stroke','#006D38')
      .style('fill-rule','evenodd');

//Cuba
   cu = d3.select('#cuba')
      .append('svg')
      .attr('width', '400')
      .attr('height', '300');

   cu.append('rect')
     .attr('x', '0')
     .attr('y', '0')
     .attr('width', '400')
     .attr('height', '60')
     .style('fill', 'blue');
   cu.append('rect')
     .attr('x', '0')
     .attr('y', '60')
     .attr('width', '400')
     .attr('height', '60')
     .style('fill', 'white');
   cu.append('rect')
     .attr('x', '0')
     .attr('y', '120')
     .attr('width', '400')
     .attr('height', '60')
     .style('fill', 'blue');
   cu.append('rect')
     .attr('x', '0')
     .attr('y', '180')
     .attr('width', '400')
     .attr('height', '60')
     .style('fill', 'white');
   cu.append('rect')
     .attr('x', '0')
     .attr('y', '240')
     .attr('width', '400')
     .attr('height', '60')
     .style('fill', 'blue');

   cu.append('polygon')
     .attr('points', '0,0, 180,150, 0,300')
     .style('fill', '#FF0000');

   cu.append('path')
     .attr('transform', 'translate(60,150) scale(25,25) ')
     .attr('d', 'M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z')
     .style('fill', 'white');


//Vietnam

  viet =  d3.select('#vietnam')
      .append('svg')
      .attr('width', '400')
      .attr('height', '300');

      viet.append('path')
        .attr('transform', 'translate(200,150) scale(50,50) ')
        .attr('d', 'M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z')
        .style('fill', 'yellow');

  }//OnInit
}
