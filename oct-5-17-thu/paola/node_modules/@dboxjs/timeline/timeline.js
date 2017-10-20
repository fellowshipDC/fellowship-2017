/* Simple timeline example
 * Single and multiline timelines
 */

export default function(config) {

  var parseDate = d3.timeParse('%Y-%m-%d');

  function Timeline(config){
    var vm = this;
    vm._config = config ? config : {};
    vm._data = [];
    vm._scales ={};
    vm._axes = {};

    vm._line = d3.line()
      .curve(d3.curveBasis)
      .x(function(d) { return vm._scales.x(d.x); })
      .y(function(d) { return vm._scales.y(d.y); });


    vm._area = d3.area()
      .curve(d3.curveBasis)
      .x(function(d) {
        if (d.alreadyScaled && d.alreadyScaled === true){
          return d.x;
        }else{
          return vm._scales.x(d.x);
        }
      })
      .y1(function(d) {
        if (d.alreadyScaled && d.alreadyScaled === true){
          return d.y;
        }else{
          return vm._scales.y(d.y);
        }

      });

  }

  //-------------------------------
  //User config functions
  Timeline.prototype.x = function(col){
    var vm = this;
    vm._config.x = col;
    return vm;
  }

  Timeline.prototype.y = function(col){
    var vm = this;
    vm._config.y = col;
    return vm;
  }

  Timeline.prototype.series = function(arr){
    var vm = this;
    vm._config.series = arr;
    return vm;
  }

  Timeline.prototype.color = function(col){
    var vm = this;
    vm._config.color = col;
    return vm;
  }

  Timeline.prototype.end = function(){
    var vm = this;
    return vm._chart;
  }

  //-------------------------------
  //Triggered by the chart.js;
  Timeline.prototype.chart = function(chart){
    var vm = this;
    vm._chart = chart;
    return vm;
  }


  Timeline.prototype.data = function(data){
    var vm = this;

    vm._data = data.map(function(d){
      d.x = parseDate(d[vm._config.x]);
      d.color = d[vm._config.color];
      delete(d[vm._config.x]);
      return d;
    });

    vm._lines = vm._config.y ? vm._config.y : vm._config.series;

    vm._lines = vm._lines.map(function(name) {
      return {
        name: name,
        values: data.map(function(d) {
          return {x: d.x, y: +d[name]};
        })
      };
    });

    return vm;
  }

  Timeline.prototype.scales = function(s){
    var vm = this;
    vm._scales = s;
    return vm;
  }

  Timeline.prototype.axes = function(a){
    var vm = this;
    vm._axes = a;
    return vm;
  }

  Timeline.prototype.domains = function(){
    var vm = this;
    vm._xMinMax = d3.extent(vm._data, function(d) { return d.x; });

    vm._yMinMax = [
      d3.min(vm._lines, function(c) { return d3.min(c.values, function(v) { return v.y; }); }),
      d3.max(vm._lines, function(c) { return d3.max(c.values, function(v) { return v.y; }); })
    ];

    vm._scales.x.domain(vm._xMinMax)
    vm._scales.y.domain(vm._yMinMax)

    console.log(vm._scales.x.domain(), vm._chart._scales.x.domain())

    vm._chart._scales = vm._scales;

    return vm;
  };

  Timeline.prototype.draw = function(){
    var vm = this;

    var lines = vm._chart._svg.selectAll(".lines")
      .data(vm._lines)
    .enter().append("g")
      .attr("class", "lines");

    var path = vm._chart._svg.selectAll(".lines").append("path")
      .attr("class", "line")
      .attr("d", function(d) {
        return vm._line(d.values);
      })
      .style("stroke", function(d){
        if (d.name == "Airbus"){
          return "rgb(000,255,000)";
        }else {
          return "#000";
        }
      });


    var t = textures.lines().thicker();

    vm._chart._svg.call(t);


    vm._area.y0(vm._scales.y(vm._yMinMax[0]));

    var areas = vm._chart._svg.selectAll(".areas")
      .data(vm._lines)
    .enter().append("g")
      .attr("class", "areas");

    var pathArea  = vm._chart._svg.selectAll(".areas").append("path")
      .attr("class", "area")
      .attr("d", function(d) {
        return vm._area(d.values);
      })
      .attr("fill", t.url());

    return vm;
  }

  return new Timeline(config);
}
