// Load the data from the CSV file
d3.csv('Overall_Variability_in_Access_to_Transplant_Score.csv').then(data => {
  // Format the date values
  const parseDate = d3.timeParse('%Y-%m-%d');
  data.forEach(d => {
    d.period_start_date = parseDate(d.period_start_date);
    d.period_end_date = parseDate(d.period_end_date);
    d.ATS_sd = +d.ATS_sd;
  });

  // Set up the SVG and chart dimensions and margins 
  //define the dimensions of the SVG element, which is 800 pixels wide and 400 pixels high
  const svgWidth = 800; 
  const svgHeight = 400; 

  const svg = d3.select('#chart')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style('display', 'block') 
    .style('margin', 'auto');

  const margin = { top: 50, right: 150, bottom: 50, left: 100 };  //These values determine the spacing between the chart area and the SVG edges.
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom; 
  const g = svg.append('g')  //appends a group <g> element to act as a container for the chart content
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Create scales for x and y axes
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.period_start_date))
    .range([0, width]);

  const yScale = d3.scaleLinear()
    .domain([d3.min(data, d => d.ATS_sd), d3.max(data, d => d.ATS_sd)]) // Use min and max values for y-axis domain
    .range([height, 0]);

  // Creating a line generator path that connects the data points based on their x and y coordinates
  const line = d3.line()
    .x(d => xScale(d.period_start_date))
    .y(d => yScale(d.ATS_sd));

  // Create x and y axes
  const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

  g.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis)
    .call(g => g.select('.domain').remove()) // Remove x-axis line
    .selectAll('text')
    .style('text-anchor', 'middle')
    .style('font-size', '12px'); // Adjust the font size as desired

  g.append('g')
    .attr('class', 'y-axis')
    .call(yAxis)
    .call(g => g.select('.domain').remove()) // Remove y-axis line
    .append('text')
    .attr('fill', '#000')
    .attr('transform', 'rotate(-90)')
    .attr('y', -70)
    .attr('x', -height / 2)
    .style('text-anchor', 'middle')
    .style('font-size', '14px') // Adjust the font size as desired
    .text('ATS Standard Deviation');

  // Create x-axis label
  g.append('text')
    .attr('fill', '#000')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom - 10)
    .style('text-anchor', 'middle')
    .style('font-size', '14px') // Adjust the font size as desired
    .text('Period');


  // Draw the line chart with gradient shading //STYLING
  g.append('linearGradient')
    .attr('id', 'line-gradient')
    .attr('gradientUnits', 'userSpaceOnUse')
    .attr('x1', 0)
    .attr('y1', yScale(0))
    .attr('x2', 0)
    .attr('y2', yScale(0))
    .selectAll('stop')
    .data([
      { offset: '0%', color: '#007EB8' },
      { offset: '100%', color: '#E0F3F8' }
    ])
    .enter().append('stop')
    .attr('offset', d => d.offset)
    .attr('stop-color', d => d.color);

    g.append('path')
    .datum(data)
    .attr('class', 'line')
    .attr('fill', 'none')
    .attr('stroke', '#007EB8') // Set the stroke color to blue (#007EB8)
    .attr('stroke-width', 2)
    .attr('d', line);


  // Add circles with custom styling for data points
  g.selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', d => xScale(d.period_start_date))
    .attr('cy', d => yScale(d.ATS_sd))
    .attr('r', 5)
    .attr('fill', '#007EB8')
    .attr('stroke', '#FFF')
    .attr('stroke-width', 2)
    .on('mouseover', d => {
      // Show tooltip on mouseover
      tooltip
        .style('opacity', 1)
        .html(`ATS_sd: ${d.ATS_sd}<br>Period: ${d.period_start_date.toLocaleDateString()} - ${d.period_end_date.toLocaleDateString()}`)
        .style('left', `${d3.event.pageX}px`)
        .style('top', `${d3.event.pageY}px`);
    })
    .on('mouseout', () => {
      // Hide tooltip on mouseout
      tooltip.style('opacity', 0);
    });

  // Add tooltip element
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);


  // Define the dropdown options with Overall and Kidney
  const dropdownOptions = [
    { value: 'Overall', label: 'Overall' },
    { value: 'KI', label: 'Kidney' },
    // Add more options as needed
  ];

  // Select the dropdown element
  const dropdown = d3.select('#dropdown');

  // Populate the dropdown menu with options
  dropdown.selectAll('option')
    .data(dropdownOptions)
    .enter()
    .append('option')
    .attr('value', d => d.value)
    .text(d => d.label);

  // Listen for changes in the dropdown selection
  dropdown.on('change', () => {
    const selectedOption = dropdown.property('value');

    // Filter the data based on the selected option
    const filteredData = data.filter(d => d.Characteristic === selectedOption);

    // Update the chart with the filtered data
    updateChart(filteredData);
  });

  // Function to update the chart based on the filtered data
  function updateChart(filteredData) {
    // Update the scales with the filtered data
    xScale.domain(d3.extent(filteredData, d => d.period_start_date));
    yScale.domain([d3.min(filteredData, d => d.ATS_sd), d3.max(filteredData, d => d.ATS_sd)]);

    // Update the x and y axes
    svg.select('.x-axis')
      .transition()
      .duration(500)
      .call(xAxis);

    svg.select('.y-axis')
      .transition()
      .duration(500)
      .call(yAxis);

    // Update the line and data points
    svg.select('.line')
      .datum(filteredData)
      .transition()
      .duration(500)
      .attr('d', line);

    svg.selectAll('.dot')
      .data(filteredData)
      .transition()
      .duration(500)
      .attr('cx', d => xScale(d.period_start_date))
      .attr('cy', d => yScale(d.ATS_sd));
  }

});

// Load the data from the CSV file
d3.csv('Variability_in_Access_to_Transplant_Scores.csv').then(data => {
  // Format the date values
  const parseDate = d3.timeParse('%Y-%m-%d');
  data.forEach(d => {
    d.period_start_date = parseDate(d.period_start_date);
    d.ATS_sd = +d.ATS_sd;
  });

  // Set up the SVG and chart dimensions
  const svgWidth = 800;
  const svgHeight = 400;

  const svg = d3.select('#chart')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style('display', 'block')
    .style('margin', 'auto');

  const margin = { top: 50, right: 150, bottom: 100, left: 100 }; // Adjusted bottom margin
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Create scales for x and y axes
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.Characteristic))
    .range([0, width])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.ATS_sd)])
    .range([height, 0]);

  // Create x and y axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale).ticks(5);

  g.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis)
    .call(g => g.select('.domain').remove()) // Remove x-axis line
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('transform', 'rotate(-45)')
    .attr('dx', '-0.5em')
    .attr('dy', '0.5em')
    .style('font-size', '12px'); // Adjust the font size as desired

  g.append('g')
    .call(yAxis)
    .call(g => g.select('.domain').remove()) // Remove y-axis line
    .append('text')
    .attr('fill', '#000')
    .attr('transform', 'rotate(-90)')
    .attr('y', -70)
    .attr('x', -height / 2)
    .style('text-anchor', 'middle')
    .style('font-size', '14px') // Adjust the font size as desired
    .text('ATS Standard Deviation');

  // Create the bars
  g.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.Characteristic))
    .attr('y', d => yScale(d.ATS_sd))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.ATS_sd))
    .attr('fill', (d, i) => `hsl(${i * 50}, 70%, 50%)`) // Different colors for each bar
    .on('mouseover', function(d) {
      d3.select(this)
        .attr('fill', 'darkblue'); // Change color on mouseover

      // Display the selected characteristic and ATS_sd value
      d3.select('#selectedCharacteristic')
        .html(`<strong>Characteristic:</strong> ${d.Characteristic}<br><strong>ATS_sd:</strong> ${d.ATS_sd}`);

      // Update the dropdown menu
      const dropdown = d3.select('#dropdown');
      dropdown.selectAll('option').remove(); // Clear existing options
      dropdown.selectAll('option')
        .data(data)
        .enter()
        .append('option')
        .text(d => d.Characteristic);
    })
    .on('mouseout', function(d, i) {
      d3.select(this)
        .attr('fill', `hsl(${i * 50}, 70%, 50%)`); // Revert to original color on mouseout
    });

  // Dropdown menu change event
  d3.select('#dropdown').on('change', function() {
    const selectedCharacteristic = this.value;
    const selectedBar = g.selectAll('.bar')
      .filter(d => d.Characteristic === selectedCharacteristic);

    // Scroll to the selected bar
    const container = document.getElementById('chart');
    const scrollToY = selectedBar.node().getBBox().y + margin.top - container.offsetTop - 50;
    container.scrollTo({ top: scrollToY, behavior: 'smooth' });
  });
});



///third part interactive elements and data visualization

// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', function () {
  // Add options to the dropdown
  var dropdown = document.getElementById('dropdown');
  var characteristics = ['Characteristic 1', 'Characteristic 2', 'Characteristic 3']; // Replace with your actual characteristic options

  characteristics.forEach(function (characteristic) {
    var option = document.createElement('option');
    option.text = characteristic;
    dropdown.add(option);
  });

  // Add event listener to the dropdown
  dropdown.addEventListener('change', function (event) {
    var selectedCharacteristic = event.target.value;

    // Update the selected characteristic
    var selectedCharacteristicDiv = document.getElementById('selectedCharacteristic');
    selectedCharacteristicDiv.innerText = 'Selected Characteristic: ' + selectedCharacteristic;
  });

  // Waiting time chart data and options
  var ethnicityLabels = ['All Ethnicities', 'White, Non-Hispanic', 'Black, Non-Hispanic', 'Hispanic/Latino', 'Asian, Non-Hispanic', 'American Indian/Alaska Native, Non-Hispanic', 'Pacific Islander, Non-Hispanic', 'Multiracial, Non-Hispanic'];
  var waitingTimeLabels = ['All Time', '< 30 Days', '30 to < 90 Days', '90 Days to < 6 Months', '6 Months to < 1 Year', '1 Year to < 2 Years', '2 Years to < 3 Years', '3 Years to < 5 Years', '5 or More Years'];
  var dataset = [
    [114207, 5747, 8816, 10269, 17968, 24956, 15109, 18286, 13056],
    [45362, 2693, 3999, 4529, 7553, 10089, 5828, 6371, 4300],
    [32591, 1446, 2316, 2806, 5046, 7292, 4414, 5362, 3909],
    [24118, 1140, 1729, 2028, 3591, 5022, 3188, 4266, 3154],
    [9649, 347, 585, 707, 1402, 2066, 1321, 1848, 1373],
    [946, 49, 76, 83, 163, 185, 128, 156, 106],
    [622, 22, 35, 39, 80, 126, 92, 124, 104],
    [919, 50, 76, 77, 133, 176, 138, 159, 110]

  ];
// Colors for each ethnicity
var ethnicityColors = [
  'rgba(255, 0, 0, 0.6)',  // All Ethnicities
  'rgba(255, 99, 132, 0.6)',  // White, Non-Hispanic
  'rgba(255, 206, 86, 0.6)',  // Black, Non-Hispanic
  'rgba(75, 192, 192, 0.6)',  // Hispanic/Latino
  'rgba(153, 102, 255, 0.6)', // Asian, Non-Hispanic
  'rgba(255, 159, 64, 0.6)',  // American Indian/Alaska Native, Non-Hispanic
  'rgba(54, 162, 235, 0.6)',  // Pacific Islander, Non-Hispanic
  'rgba(255, 99, 132, 0.6)'   // Multiracial, Non-Hispanic
];

// Create the chart
var ctx = document.getElementById('waiting-time-chart-canvas').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ethnicityLabels,
    datasets: waitingTimeLabels.map(function (label, index) {
      return {
        label: label,
        data: dataset.map(function (data) {
          return data[index];
        }),
        backgroundColor: ethnicityColors[index], // Assign color based on ethnicity index
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      };
    })
  },
  options: {
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    },
    plugins: {
      title: {
        display: true,
        text: 'Waiting Time by Ethnicity'
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});
});



//fourth chart
d3.csv("Don_Annual.csv").then(function(data) {
  // Extract the required columns from the CSV data
  var years = data.map(function(d) { return +d.yr; });
  var donors = data.map(function(d) { return +d.n; });
  var pctChanges = data.map(function(d) { return +d.pct_chg; });

  // Calculate the minimum and maximum values for y-axis scale
  var minY = Math.min.apply(null, donors);
  var maxY = Math.max.apply(null, donors);
  var yMin = Math.min(4000, minY); // Set the y-axis minimum to 4000 or the calculated minimum value
  var yMax = Math.max(22000, maxY); // Set the y-axis maximum to 22000 or the calculated maximum value

  // Create a canvas element for the line chart
  var canvas = document.createElement("canvas");
  canvas.id = "line-chart-canvas";
  canvas.width = 1000; // Set the desired width
  canvas.height = 500; // Set the desired height
  document.getElementById("chart3").appendChild(canvas);

  // Create the line chart
  var ctx = canvas.getContext("2d");
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years.map(String), // Convert years to strings for x-axis labels
      datasets: [{
        label: 'National Kidney Donors',
        data: donors,
        borderColor: 'blue',
        fill: false
      }]
    },
    options: {
      responsive: false, // Disable responsiveness
      maintainAspectRatio: false, // Disable aspect ratio
      plugins: {
        legend: {
          display: false // Hide the legend
        },
        tooltip: {
          enabled: false // Disable the default tooltip
        },
        hover: {
          onHover: function(e, elements) {
            // Change the cursor style on hover
            e.target.style.cursor = elements.length ? 'pointer' : 'default';
          }
        }
      },
      layout: {
        padding: {
          top: 20,
          right: 2,
          bottom: 40, // Increase bottom padding for y-axis labels
          left: 100
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          },
          ticks: {
            maxRotation: 0, // Prevent label rotation
            autoSkip: true, // Enable auto-skipping of labels
            maxTicksLimit: 10 // Set maximum number of x-axis labels
          }
        },
        y: {
          title: {
            display: true,
            text: 'Number of Donors'
          },
          reverse: false, // Reverse the y-axis to make the line go upward
          min: yMin, // Set the y-axis minimum
          max: yMax // Set the y-axis maximum
        }
      }
    }
  });

  canvas.addEventListener('mousemove', function(e) {
    var activePoints = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
    if (activePoints.length > 0) {
      var firstPoint = activePoints[0];
      var datasetIndex = firstPoint.datasetIndex;
      var index = firstPoint.index;
      var year = chart.data.labels[index];
      var number = chart.data.datasets[datasetIndex].data[index];
      var pctChange = pctChanges[index];
  
      chart.options.plugins.tooltip.enabled = true; // Enable tooltips
      chart.data.datasets[datasetIndex].borderColor = 'red'; // Highlight the hovered dataset
      chart.update();
  
      console.log("Year: " + year + ", Number: " + number + ", Change: " + pctChange);
      // Perform any desired actions when mouseover occurs on a data point
    }
  });
  
  canvas.addEventListener('mouseout', function(e) {
    chart.options.plugins.tooltip.enabled = false; // Disable tooltips
    chart.data.datasets[0].borderColor = 'blue'; // Reset the dataset color
    chart.update();
  
    // Perform any desired actions when mouseout occurs
  });
});



d3.csv("TX_Annual.csv").then(function(data) {
  // Extract the required columns from the CSV data
  var years = data.map(function(d) { return +d.yr; });
  var donors = data.map(function(d) { return +d.n; });
  var pctChanges = data.map(function(d) { return +d.pct_chg; });

  // Calculate the minimum and maximum values for y-axis scale
  var minY = Math.min.apply(null, donors);
  var maxY = Math.max.apply(null, donors);
  var yMin = Math.min(5000, minY); // Set the y-axis minimum to 5000 or the calculated minimum value
  var yMax = Math.max(27000, maxY); // Set the y-axis maximum to 25000 or the calculated maximum value

  // Create a canvas element for the line chart
  var canvas = document.createElement("canvas");
  canvas.id = "line-chart-canvas";
  canvas.width = 1000; // Set the desired width
  canvas.height = 500; // Set the desired height
  document.getElementById("chart4").appendChild(canvas);

  // Create the line chart
  var ctx = canvas.getContext("2d");
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years.map(String), // Convert years to strings for x-axis labels
      datasets: [{
        label: 'National Kidney Transplants',
        data: donors,
        borderColor: 'rgb(0, 123, 255)', // Custom line color
        backgroundColor: 'rgba(0, 123, 255, 0.2)', // Custom fill color
        pointRadius: 4, // Increase point size
        pointHoverRadius: 6, // Increase point size on hover
        tension: 0.4 // Adjust line curve
      }]
    },
    options: {
      responsive: false, // Disable responsiveness
      maintainAspectRatio: false, // Disable aspect ratio
      plugins: {
        legend: {
          display: false // Hide the legend
        },
        tooltip: {
          enabled: false // Disable the default tooltip
        },
        hover: {
          onHover: function(e, elements) {
            // Change the cursor style on hover
            e.target.style.cursor = elements.length ? 'pointer' : 'default';
          }
        }
      },
      layout: {
        padding: {
          top: 20,
          right: 2,
          bottom: 40, // Increase bottom padding for y-axis labels
          left: 100
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year',
            font: {
              size: 14 // Increase x-axis title font size
            },
            padding: {
              bottom: 10 // Increase bottom padding for x-axis title
            }
          },
          ticks: {
            maxRotation: 0, // Prevent label rotation
            autoSkip: true, // Enable auto-skipping of labels
            maxTicksLimit: 10, // Set maximum number of x-axis labels
            font: {
              size: 10 // Adjust x-axis tick font size
            }
          },
          grid: {
            display: false // Hide x-axis grid lines
          }
        },
        y: {
          title: {
            display: true,
            text: 'Number of Transplants',
            font: {
              size: 14 // Increase y-axis title font size
            },
            padding: {
              top: 20 // Increase top padding for y-axis title
            }
          },
          reverse: false, // Reverse the y-axis to make the line go upward
          min: yMin, // Set the y-axis minimum
          max: yMax, // Set the y-axis maximum
          ticks: {
            font: {
              size: 10 // Adjust y-axis tick font size
            }
          }
        }
      }
    }
  });

  canvas.addEventListener('mousemove', function(e) {
    var activePoints = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
    if (activePoints.length > 0) {
      var firstPoint = activePoints[0];
      var datasetIndex = firstPoint.datasetIndex;
      var index = firstPoint.index;
      var year = chart.data.labels[index];
      var number = chart.data.datasets[datasetIndex].data[index];
      var pctChange = pctChanges[index];
  
      chart.options.plugins.tooltip.enabled = true; // Enable tooltips
      chart.data.datasets[datasetIndex].borderColor = 'rgb(255, 0, 0)'; // Highlight the hovered dataset
      chart.update();
  
      console.log("Year: " + year + ", Number: " + number + ", Change: " + pctChange);
      // Perform any desired actions when mouseover occurs on a data point
    }
  });
  
  canvas.addEventListener('mouseout', function(e) {
    chart.options.plugins.tooltip.enabled = false; // Disable tooltips
    chart.data.datasets[0].borderColor = 'rgb(0, 123, 255)'; // Reset the dataset color
    chart.update();
  
    // Perform any desired actions when mouseout occurs
  });
});
