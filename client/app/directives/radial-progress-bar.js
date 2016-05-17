(function() {
  angular.module('baby')
    .directive('matrixDiagram', matrixDiagram);

    function matrixDiagram($window) {
      function linker(scope, el) {
        var d3 = $window.d3;
        el = el[0];
        var data;

        scope.$watch('data', function(newVal, oldVal) {
            if(newVal !== oldVal) {
              data = newVal;
              render(newVal);
            }
        });

        function render() {
          var $container = $('.chart-container'),
            τ = 2 * Math.PI,
            width = $container.width(),
            height = $container.height(),
            outerRadius = Math.min(width,height)/2,
            innerRadius = (outerRadius/5)*4,
            fontSize = (Math.min(width,height)/4);

          var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius)
              .startAngle(0);

          var svg = d3.select('.chart-container').append("svg")
              .attr("width", '100%')
              .attr("height", '100%')
              .attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
              .attr('preserveAspectRatio','xMinYMin')
              .append("g")
              .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");

          var text = svg.append("text")
              .text('0%')
              .attr("text-anchor", "middle")
              .style("font-size",fontSize+'px')
              .attr("dy",fontSize/3)
              .attr("dx",2);

          var background = svg.append("path")
              .datum({endAngle: τ})
              .style("fill", "#7cc35f")
              .attr("d", arc);

          var foreground = svg.append("path")
              .datum({endAngle: 0 * τ})
              .style("fill", "#57893e")
              .attr("d", arc);

          (function() {
            foreground.transition()
                .duration(5000)
                .call(arcTween, .50 * τ);
          })()

          function arcTween(transition, newAngle) {
            transition.attrTween("d", function(d) {
              var interpolate = d3.interpolate(d.endAngle, newAngle);
              return function(t) {
                  d.endAngle = interpolate(t);
                  text.text(Math.round((d.endAngle/τ)*100)+'%');
                  return arc(d);
              };
            });
          }
        }




      } // end of linker

      return {
        restrict: 'EA',
        scope: {
          data: '='
        },
        controller: function(){},
        link: linker
      };
    }
})();
