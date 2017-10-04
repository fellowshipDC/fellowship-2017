import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-joseluis',
  templateUrl: './joseluis.component.html',
  styleUrls: ['./joseluis.component.styl']
})
export class JoseluisComponent implements OnInit {

  data;
  
  constructor() { }

  ngOnInit() {

    d3.csv('https://data.cityofchicago.org/resource/tt4n-kn4t.csv', (data) => {
      this.data = data;

    //Con SVG

        //Crea un contenedor SVG
        var svgContainer = d3.select("div") //Selecciona los divs
        .append('svg') //Agrega un elemento svg a cada elemento seleccionado
        .attr('width', 100 + '%') //Ancho = 100%
        .attr( 'height', 100 + '%') //Alto = 100%
        .attr("viewBox", "0 0 500 500" ) //Dimensiones del canvas en dnd se dibuja la gráfica

//Crea, dibuja y cambia los estilos de los círculos
var circles = svgContainer.selectAll('circle')
            .data(this.data)
            .enter()
            .append("circle")
            .attr("cx", function (d : any) { return d.annual_salary / 500; }) //Centro en X
            .attr("cy", '50')  //Centro en Y
            .attr("r", function (d : any) { return d.annual_salary / 4000; }) //Radio
            .style("fill", "#999") //Color del relleno
            .style("stroke", "#585858") //Color del borde            
            .style("opacity", "0.5") //Opacidad                   
});

/*

REFERENCIAS
https://www.dashingd3js.com/svg-basic-shapes-and-d3js
https://css-tricks.com/scale-svg/

*/  

  }

}
