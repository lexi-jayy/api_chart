
      // Load the Visualization API and the controls package.
      google.charts.load('current', {'packages':['corechart', 'controls']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawDashboard);

      // Callback that creates and populates a data table,
      // instantiates a dashboard, a range slider and a pie chart,
      // passes in the data and draws it.
      function drawDashboard() {
        // double quotes for eternal json sheets
        $.ajax({
          url : 'https://my.api.mockaroo.com/income.json?key=5be81a40',
          dataType : 'json',
          Type:"GET", 
          success : function(dataFromJSON){
      	console.log("success");
        console.log(dataFromJSON);
        console.log([dataFromJSON[0].first_name, dataFromJSON[0].income]);

        // // Create our data table.
        var data = new google.visualization.DataTable();
         data.addColumn('string' , 'Name');
         data.addColumn('number' , 'Income');
         for (var i = 0; i < dataFromJSON.length; i++) {
          console.log([dataFromJSON[i].first_name, dataFromJSON[i].income]),
          data.addRow([dataFromJSON[i].first_name, dataFromJSON[i].income])
        } // for loop
        var options = {
          title: 'name verses income'
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));// getting the element by id is getting from the html
        chart.draw(data, options);
      }, //success function
    error: function(error) {
      console.log("something has gone wrong");
    }

    }); //AJAX Closed
    } //function drawdashboard