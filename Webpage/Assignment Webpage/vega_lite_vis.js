

var vg_radial = "RC_GDP.JSON";
var vg_scatter = "Scatterplot.JSON";
var vg_map = "Corruption_map.JSON";
var bar_chart1 = "Barcharts.JSON";
var bar_chart2 = "Barcharts2.JSON";
var bar_chart3 = "Barcharts3.JSON";
var bar_chart4 = "Barcharts4.JSON";


vegaEmbed('#RadialChart', vg_radial, { "actions": false });
vegaEmbed('#Scatterplot', vg_scatter, { "actions": false });
vegaEmbed('#Map', vg_map, { "actions": false });
vegaEmbed('#chart2', bar_chart2, { "actions": false });
vegaEmbed('#chart3', bar_chart3, { "actions": false });
vegaEmbed('#chart4', bar_chart4, { "actions": false });
vegaEmbed('#chart1', bar_chart1, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
