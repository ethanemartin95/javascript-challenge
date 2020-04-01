// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(ufoData) {
        
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
          console.log(key, value);

          var cell = row.append("td");
          cell.text(value);
        });
    });



});