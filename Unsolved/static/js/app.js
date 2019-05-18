/* data route */
var url = "/data";

function buildPlot() {
    // YOUR CODE HERE
    // fetch the data from your api
    // plot the results

    d3.json('url').then(function(data) {
        var data = [data];
        var layout = { margin: {t: 30, b: 100} };
        Plotly.plot('plot', data, layout);
    })
}

buildPlot();
