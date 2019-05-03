var w = 800;
var h = 200;


//walkscore
  d3.csv("pedestrian.csv").then(function(data) {

    //console.log(data);



  var svg = d3.select("#scorechart").append("svg")
              .attr("width", w)
              .attr("height", h);

              var tooltip = d3.select("#scorechart")
                      .append("div")
                      .style("background", "white")
                      .style("padding", "5px")
                      .style("font-family", "Gothic A1, sans-serif")
                      .style("position", "absolute")
                      .style("font-size", "13px")
                      .style("visibility", "hidden");

  var rectangles = svg.selectAll("rect")
                      .data(data)
                      .enter()
                      .append("rect")
                      .attr("x", function(d, i) { return (i * 50) + 285;
                      })
                      .attr("y", function(d) {
             return (h - (2 * d.walkscore));
           })
                      .attr("width", 40)
                      .attr("height", function(d) {return (d.walkscore * 2) ;} )

                      rectangles.attr("fill","#374452")
                           .style("opacity", .5)
                           .on("mouseover", function(d) {
              //  d3.select(this).attr('opacity', 1)
              return tooltip.style("visibility", "visible").html( d.description + '<br>' + "Neighborhood: " + d.neighborhood);
            })
            .on("mousemove", function(d) {
              return tooltip.style("top", (d3.event.pageY - 20) + "px").style("left", (d3.event.pageX + 20) + "px").html( d.description + '<br>' +  "Neighborhood: " + d.neighborhood );
            })
            .on("mouseout", function(d) {
              return tooltip.style("visibility", "hidden");
            });

  var walkscorelabels = svg.selectAll("text.walkscore")
                  .data(data)
                  .enter()
                  .append("text")
                  .attr("class", "walkscore")
                  .text(function(d) {return d.walkscore })
                  .style("font-family", "Gothic A1, sans-serif")
                  .style("font-size", "13px");
                  walkscorelabels.attr("x", function(d, i) {
                              return (i * 50) + 295 ;
                            })
                            .attr("y", function(d) {
                              return (h - (2*d.walkscore)) + 15 ;
                                });


  var zipcodelabels = svg.selectAll("text.zipcode")
                      .data(data)
                      .enter()
                      .append("text")
                      .style("font-family", "Gothic A1, sans-serif")
                      .attr("class", "zipcode")
                      .text(function(d) { return d.zipcode })
                      .style("font-size", "12px");
        zipcodelabels.attr("x", function(d, i) {
                          return (i * 50) + 288;
                            })
                        .attr("y", function(d) {
                        return (h - (2*d.walkscore)) - 7 ;
                          });


  });
