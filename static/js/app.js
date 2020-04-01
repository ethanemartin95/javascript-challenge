// from data.js
var tableData = data;

// YOUR CODE HERE!
// select button
var button = d3.select("#filter-btn");
//select table body
var tbody = d3.select("tbody");

//Do action on click
button.on("click", function() {

    //clear table before search
    tbody.html("");

    //get input element
    var inputElement = d3.select("#datetime");
    //get input value from element
    var inputValue = inputElement.property("value");

    //print to check
    console.log(inputValue);

    //filter data on input value
    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);
    //check filtered data in log
    console.log(filteredData);

    //loop through filtered data
    filteredData.forEach(function(ufoData) {
        
        //for each object of the array, create new row
        var row = tbody.append("tr");
        //loop through key values of each object
        Object.entries(ufoData).forEach(function([key, value]) {
            //check log
            console.log(key, value);
            // create new column for each data element
            var cell = row.append("td");
            //display value in table
            cell.text(value);
        });
    });
});