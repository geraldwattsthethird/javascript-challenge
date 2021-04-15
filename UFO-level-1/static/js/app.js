// from data.js
var tableData = data;

var tableTb = d3.select("tbody");
var button = d3.select("#filter-btn");
var Tdate = d3.select("#datetime");
var Tcity = d3.select("#city");
var Tcolumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tableTb.append("tr");
        Tcolumns.forEach(column => row.append("td").text(ufoSightings[column]));
    })
};

addData(tableData);

button.on("click", () => {
    d3.event.preventDefault();

    var inputDate = Tdate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    tableTb.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !==0) {
        addData(filterDate);
    }

});

function runClear() {
    // Clearing values in the inputs (placeholder goes back)
    inputDate = d3.select("#datetime").property("value", '');
    inputCity = d3.select("#city").property("value", '');
    inputState = d3.select("#state").property("value", '');
    inputCountry = d3.select("#country").property("value", '');
    inputShape = d3.select("#shape").property("value", '');
  
    // Clear filtered table
    tableBody.html('')
  
    // Adding back original table
    tableData.forEach((report) => {
      var row = tableBody.append("tr");
      Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

