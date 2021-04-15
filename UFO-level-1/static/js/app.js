// from data.js
var tableData = data;

// use d3
var tableTb = d3.select("tbody");
var button = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn");
var form = d3.select("form");


data.forEach((report) => {
    var row = tableTb.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

//Create event handler functions
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function
function runEnter() {

    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the values from the input element
    var inputValue = inputElement.property("value");
  
    console.log("date entered:", inputValue);
      
    var filteredData = tableData.filter(report => report.datetime === inputValue);

    console.log('filteredData:', filteredData);

    tableTb.html('')

    filteredData.forEach((report) => {
        var row = tableTb.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

