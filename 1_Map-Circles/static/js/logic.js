// A function to determine the marker size based on the population
function markerSize(total) {
    return Math.sqrt(total) * 2900;
  }
// An array that contains all the information needed to create total, kidney, liver, and heart markers
// data sourced from https://optn.transplant.hrsa.gov/data/view-data-reports/build-advanced/
let waitlist = [
    {
      coordinates: [37, -121],
      stateTotal: {
        name: "California Organ Waitlist",
        total: 21086
      },
      stateKidney: {
        total: 18520
      },
      stateLiver: {
        total: 1861
      },
      stateHeart: {
        total: 244
      }
    },
    {
      coordinates: [31.5, -99.563461],
      stateTotal: {
        name: "Texas Organ Waitlist",
        total: 11192
      },
      stateKidney: {
        total: 9277
      },
      stateLiver: {
        total: 1307
      },
      stateHeart: {
        total: 349
      }
    },
    {
      coordinates: [43.165726, -74.948051],
      stateTotal: {
        name: "New York Organ Waitlist",
        total: 8244
      },
      stateKidney: {
        total: 7089
      },
      stateLiver: {
        total: 503
      },
      stateHeart: {
        total: 276
      }
    },
    {
      coordinates: [40.8, -77.209755],
      stateTotal: {
        name: "Pennsylvania Organ Waitlist",
        total: 5320
      },
      stateKidney: {
        total: 4550
      },
      stateLiver: {
        total: 413
      },
      stateHeart: {
        total: 101
      }
    },
    {
      coordinates: [27.766279, -81.686783],
      stateTotal: {
        name: "Florida Organ Waitlist",
        total: 5146
      },
      stateKidney: {
        total: 4350
      },
      stateLiver: {
        total: 417
        },
      stateHeart: {
        total: 202
      }
    },
    {
      coordinates: [40.349457, -88.986137],
      stateTotal: {
        name: "Illinois Organ Waitlist",
        total: 4476
      },
      stateKidney: {
        total: 3765
      },
      stateLiver: {
        total: 274
      },
      stateHeart: {
        total: 179
      }
    },
    {
      coordinates: [42.4, -71.530106],
      stateTotal: {
        name: "Massachusetts Organ Waitlist",
        total: 3817
      },
      stateKidney: {
        total: 3070
      },
      stateLiver: {
        total: 549
      },
      stateHeart: {
        total: 99
      }
    },
    {
      coordinates: [35.630066, -79.806419],
      stateTotal: {
        name: "North Carolina Organ Waitlist",
        total: 3778
      },
      stateKidney: {
        total: 3430
      },
      stateLiver: {
        total: 119
      },
      stateHeart: {
        total: 85
      }
    }, 
    {
      coordinates: [40.298904, -74.521011],
      stateTotal: {
        name: "New Jersey Organ Waitlist",
        total: 3655
      },
      stateKidney: {
        total: 3152
      },
      stateLiver: {
        total: 246
      },
      stateHeart: {
        total: 101
      }
    }, 
    {
      coordinates: [33.040619, -83.643074],
      stateTotal: {
        name: "Georgia Organ Waitlist",
        total: 3334
      },
      stateKidney: {
        total: 2879
      },
      stateLiver: {
        total: 242
      },
      stateHeart: {
        total: 130
      }
    },
    {
      coordinates: [37.769337, -78.169968],
      stateTotal: {
        name: "Virginia Organ Waitlist",
        total: 3333
      },
      stateKidney: {
        total: 2738
      },
      stateLiver: {
        total: 333
      },
      stateHeart: {
        total: 116
      }
    },
    {
      coordinates: [39.063946, -76.802101],
      stateTotal: {
        name: "Maryland Organ Waitlist",
        total: 3063
      },
      stateKidney: {
        total: 2313
      },
      stateLiver: {
        total: 542
      },
      stateHeart: {
        total: 108
      }
    },
    {
      coordinates: [43.326618, -84.536095],
      stateTotal: {
        name: "Michigan Organ Waitlist",
        total: 2622
      },
      stateKidney: {
        total: 2127
      },
      stateLiver: {
        total: 223
      },
      stateHeart: {
        total: 140
      }
    },
    {
      coordinates: [40.388783, -82.764915],
      stateTotal: {
        name: "Ohio Organ Waitlist",
        total: 2557
      },
      stateKidney: {
        total: 1957
      },
      stateLiver: {
        total: 298
      },
      stateHeart: {
        total: 170
      }
    },
    {
      coordinates: [33.856892, -80.945007],
      stateTotal: {
        name: "South Carolina Organ Waitlist",
        total: 2221
      },
      stateKidney: {
        total: 1975
      },
      stateLiver: {
        total: 89
      },
      stateHeart: {
        total: 80
      }
    },
    {
      coordinates: [35.747845, -86.692345],
      stateTotal: {
        name: "Tennessee Organ Waitlist",
        total: 2159
      },
      stateKidney: {
        total: 1886
      },
      stateLiver: {
        total: 193
      },
      stateHeart: {
        total: 34
      }
    },
    {
      coordinates: [45.694454, -93.900192],
      stateTotal: {
        name: "Minnesota Organ Waitlist",
        total: 1842
      },
      stateKidney: {
        total: 1466
      },
      stateLiver: {
        total: 94
      },
      stateHeart: {
        total: 64
      }
    },
    {
      coordinates: [31.169546, -91.867805],
      stateTotal: {
        name: "Louisiana Organ Waitlist",
        total: 1831
      },
      stateKidney: {
        total: 1580
      },
      stateLiver: {
        total: 129
      },
      stateHeart: {
        total: 60
      }
    },
    {
      coordinates: [32.806671, -86.79113],
      stateTotal: {
        name: "Alabama Organ Waitlist",
        total: 1639
      },
      stateKidney: {
        total: 1405
      },
      stateLiver: {
        total: 161
      },
      stateHeart: {
        total: 22
      }
    },
    {
      coordinates: [39.849426, -86.258278],
      stateTotal: {
        name: "Indiana Organ Waitlist",
        total: 1546
      },
      stateKidney: {
        total: 1253
      },
      stateLiver: {
        total: 122
      },
      stateHeart: {
        total: 90
      }
    },
    {
      coordinates: [44.268543, -89.616508],
      stateTotal: {
        name: "Wisconsin Organ Waitlist",
        total: 1516
      },
      stateKidney: {
        total: 1207
      },
      stateLiver: {
        total: 163
      },
      stateHeart: {
        total: 63
      }
    },
    {
      coordinates: [38.456085, -92.288368],
      stateTotal: {
        name: "Missouri Organ Waitlist",
        total: 1496
      },
      stateKidney: {
        total: 1246
      },
      stateLiver: {
        total: 149
      },
      stateHeart: {
        total: 44
      }
    },
    {
      coordinates: [47.400902, -121.490494],
      stateTotal: {
        name: "Washington Organ Waitlist",
        total: 1482
      },
      stateKidney: {
        total: 1200
      },
      stateLiver: {
        total: 164
      },
      stateHeart: {
        total: 41
      }
    },
    {
      coordinates: [41.597782, -72.755371],
      stateTotal: {
        name: "Connecticut Organ Waitlist",
        total: 1283
      },
      stateKidney: {
        total: 1031
      },
      stateLiver: {
        total: 179
      },
      stateHeart: {
        total: 52
      }
    },
    {
      coordinates: [33.729759, -111.431221],
      stateTotal: {
        name: "Arizona Organ Waitlist",
        total: 1161
      },
      stateKidney: {
        total: 975
      },
      stateLiver: {
        total: 100
      },
      stateHeart: {
        total: 48
      }
    },
    {
      coordinates: [39.059811, -105.311104],
      stateTotal: {
        name: "Colorado Organ Waitlist",
        total: 1158
      },
      stateKidney: {
        total: 982
      },
      stateLiver: {
        total: 106
      },
      stateHeart: {
        total: 22
      }
    },
    {
      coordinates: [37.66814, -84.670067],
      stateTotal: {
        name: "Kentucky Organ Waitlist",
        total: 1158
      },
      stateKidney: {
        total: 925
      },
      stateLiver: {
        total: 132
      },
      stateHeart: {
        total: 45
      }
    },
    {
      coordinates: [32.741646, -89.678696],
      stateTotal: {
        name: "Mississippi Organ Waitlist",
        total: 1120
      },
      stateKidney: {
        total: 971
      },
      stateLiver: {
        total: 72
      },
      stateHeart: {
        total: 42
      }
    },
    {
      coordinates: [35.565342, -96.928917],
      stateTotal: {
        name: "Oklahoma Organ Waitlist",
        total: 810
      },
      stateKidney: {
        total: 593
      },
      stateLiver: {
        total: 169
      },
      stateHeart: {
        total: 24
      }
    },
    {
      coordinates: [40.313515, -116.055374],
      stateTotal: {
        name: "Nevada Organ Waitlist",
        total: 696
      },
      stateKidney: {
        total: 585
      },
      stateLiver: {
        total: 74
      },
      stateHeart: {
        total: 13
      }
    },
    {
      coordinates: [34.840515, -106.248482],
      stateTotal: {
        name: "New Mexico Organ Waitlist",
        total: 671
      },
      stateKidney: {
        total: 555
      },
      stateLiver: {
        total: 80
      },
      stateHeart: {
        total: 14
      }
    },
    {
      coordinates: [42.011539, -93.210526],
      stateTotal: {
        name: "Iowa Organ Waitlist",
        total: 669
      },
      stateKidney: {
        total: 536
      },
      stateLiver: {
        total: 62
      },
      stateHeart: {
        total: 30
      }
    },
    {
      coordinates: [39, -111],
      stateTotal: {
        name: "Utah Organ Waitlist",
        total: 615
      },
      stateKidney: {
        total: 474
      },
      stateLiver: {
        total: 90
      },
      stateHeart: {
        total: 34
      }
    },
    {
      coordinates: [21.094318, -157.498337],
      stateTotal: {
        name: "Hawaii Organ Waitlist",
        total: 565
      },
      stateKidney: {
        total: 533
      },
      stateLiver: {
        total: 28
      },
      stateHeart: {
        total: 0
      }
    },
    {
      coordinates: [43.572021, -121.070938],
      stateTotal: {
        name: "Oregon Organ Waitlist",
        total: 545
      },
      stateKidney: {
        total: 419
      },
      stateLiver: {
        total: 65
      },
      stateHeart: {
        total: 30
      }
    },
    {
      coordinates: [43.452492, -71.563896],
      stateTotal: {
        name: "New Hampshire Organ Waitlist",
        total: 488
      },
      stateKidney: {
        total: 386
      },
      stateLiver: {
        total: 77
      },
      stateHeart: {
        total: 13
      }
    },
    {
      coordinates: [34.969704, -92.373123],
      stateTotal: {
        name: "Arkansas Organ Waitlist",
        total: 486
      },
      stateKidney: {
        total: 384
      },
      stateLiver: {
        total: 50
      },
      stateHeart: {
        total: 31
      }
    },
    {
      coordinates: [44.693947, -69.381927],
      stateTotal: {
        name: "Maine Organ Waitlist",
        total: 485
      },
      stateKidney: {
        total: 369
      },
      stateLiver: {
        total: 81
      },
      stateHeart: {
        total: 18
      }
    },
    {
      coordinates: [38.5266, -96.726486],
      stateTotal: {
        name: "Kansas Organ Waitlist",
        total: 476
      },
      stateKidney: {
        total: 339
      },
      stateLiver: {
        total: 92
      },
      stateHeart: {
        total: 37
      }
    },
    {
      coordinates: [39.318523, -75.507141],
      stateTotal: {
        name: "Delaware Organ Waitlist",
        total: 472
      },
      stateKidney: {
        total: 396
      },
      stateLiver: {
        total: 51
      },
      stateHeart: {
        total: 10
      }
    },
    {
      coordinates: [41.4, -70.51178],
      stateTotal: {
        name: "Rhode Island Organ Waitlist",
        total: 441
      },
      stateKidney: {
        total: 354
      },
      stateLiver: {
        total: 58
      },
      stateHeart: {
        total: 20
      }
    },
    {
      coordinates: [38.491226, -80.954453],
      stateTotal: {
        name: "West Virginia Organ Waitlist",
        total: 410
      },
      stateKidney: {
        total: 297
      },
      stateLiver: {
        total: 76
      },
      stateHeart: {
        total: 16
      }
    },
    {
      coordinates: [41.12537, -98.268082],
      stateTotal: {
        name: "Nebraska Organ Waitlist",
        total: 341
      },
      stateKidney: {
        total: 255
      },
      stateLiver: {
        total: 55
      },
      stateHeart: {
        total: 17
      }
    },
    {
      coordinates: [44.299782, -99.438828],
      stateTotal: {
        name: "South Dakota Organ Waitlist",
        total: 323
      },
      stateKidney: {
        total: 274
      },
      stateLiver: {
        total: 34
      },
      stateHeart: {
        total: 3
      }
    },
    {
      coordinates: [44.240459, -114.478828],
      stateTotal: {
        name: "Idaho Organ Waitlist",
        total: 264
      },
      stateKidney: {
        total: 208
      },
      stateLiver: {
        total: 41
      },
      stateHeart: {
        total: 7
      }
    },
////////////////////////////////
 /* Remove disttric of Columbia
    {
      coordinates: [38.897438, -77.026817],
      stateTotal: {
        name: "District of Columbia Organ Waitlist",
        total: 247
      },
      stateKidney: {
        total: 207
      },
      stateLiver: {
        total: 23
      },
      stateHeart: {
        total: 5
      }
    }, */
////////////////////////////////
    {
      coordinates: [46.921925, -110.454353],
      stateTotal: {
        name: "Montana Organ Waitlist",
        total: 186
      },
      stateKidney: {
        total: 154
      },
      stateLiver: {
        total: 18
      },
      stateHeart: {
        total: 3
      }
    },
    {
      coordinates: [47.528912, -99.784012],
      stateTotal: {
        name: "North Dakota Organ Waitlist",
        total: 168
      },
      stateKidney: {
        total: 134
      },
      stateLiver: {
        total: 9
      },
      stateHeart: {
        total: 11
      }
    },
    {
      coordinates: [44.045876, -72.710686],
      stateTotal: {
        name: "Vermont Organ Waitlist",
        total: 161
      },
      stateKidney: {
        total: 123
      },
      stateLiver: {
        total: 28
      },
      stateHeart: {
        total: 9
      }
    },
    {
      coordinates: [61.370716, -152.404419],
      stateTotal: {
        name: "Alaska Organ Waitlist",
        total: 142
      },
      stateKidney: {
        total: 127
      },
      stateLiver: {
        total: 10
      },
      stateHeart: {
        total: 2
      }
    },
    {
      coordinates: [42.755966, -107.30249],
      stateTotal: {
        name: "Wyoming Organ Waitlist",
        total: 97
      },
      stateKidney: {
        total: 80
      },
      stateLiver: {
        total: 9
      },
      stateHeart: {
        total: 1
      }
    }
  ];
  
// Define arrays to hold the created total and kidney markers.
let stateTotalMarkers = [];
let stateKidneyMarkers = [];
let stateLiverMarkers = [];
let stateHeartMarkers = [];

// Loop through state locations, and create the total and kidney markers.
for (let i = 0; i < waitlist.length; i++) {
    // Setting the marker radius for the organ waitlist by passing total into the markerSize function
    stateTotalMarkers.push(
      L.circle(waitlist[i].coordinates, {
            stroke: false,
            fillOpacity: 0.6,
            color: "#3300FF", //#3300FF bright blue >> option #0868ac blue
            fillColor: "#3300FF", //#3300FF bright blue >> option #0868ac blue
            radius: markerSize(waitlist[i].stateTotal.total)
        })
    );
    // Set the marker radius for the kidney waitlist by passing the total to the markerSize() function.
    stateKidneyMarkers.push(
        L.circle(waitlist[i].coordinates, {
            stroke: false,
            fillOpacity: 0.6,
            color: "#FF00FF", //#CC33FF bright purple >> option #43a2ca teal
            fillColor: "#FF00FF", //#CC33FF bright purple >> option #43a2ca teal
            radius: markerSize(waitlist[i].stateKidney.total)
        })
    );
    // Set the marker radius for the liver waitlist by passing the total to the markerSize() function.
    stateLiverMarkers.push(
        L.circle(waitlist[i].coordinates, {
            stroke: false,
            fillOpacity: 0.7,
            color: "#33CCFF", //#33CCFF bright teal >> option #7bccc4 aqua
            fillColor: "#33CCFF", //#33CCFF bright teal >> option #7bccc4 aqua
            radius: markerSize(waitlist[i].stateLiver.total)
        })
    );
    // Set the marker radius for the heart waitlist by passing the total to the markerSize() function.
    stateHeartMarkers.push(
        L.circle(waitlist[i].coordinates, {
            stroke: false,
            fillOpacity: 0.7,
            color: "#FFFF33", //#FFFF33 yellow >> option #bae4bc pale green
            fillColor: "#FFFF33", //#FFFF33 yellow >> option #bae4bc pale green
            radius: markerSize(waitlist[i].stateHeart.total)
        })
    );
} 

// Create the base layer maps
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// Create two separate layer groups: one for the total markers and another for the kidney markers.
let waitlistTotal = L.layerGroup(stateTotalMarkers);
let waitlistKidney = L.layerGroup(stateKidneyMarkers);
let waitlistLiver = L.layerGroup(stateLiverMarkers);
let waitlistHeart = L.layerGroup(stateHeartMarkers);

// Create a baseMaps object.
let baseMaps = {
    "Street Map": street
  };

// Create an overlay object.
let overlayMaps = {
    '<i style="width: 10px;height: 10px;display: inline-block;background: #3300FF; "T"></i> Total Organ Waitlist': waitlistTotal,
    '<i style="width: 10px;height: 10px;display: inline-block;background: #FF00FF; "T"></i> Kidney Waitlist': waitlistKidney,
    '<i style="width: 10px;height: 10px;display: inline-block;background: #33CCFF; "T"></i> Liver Waitlist': waitlistLiver,
    '<i style="width: 10px;height: 10px;display: inline-block;background: #FFFF33; "T"></i> Heart Waitlist': waitlistHeart
  };

// Define a map object.
let myMap = L.map("map", {
    center: [43.09, -120.71],
    zoom: 3.5,
    layers: [street, waitlistTotal, waitlistKidney, waitlistLiver, waitlistHeart]
  });

// Pass map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);  

/*
// add basic pointer marker to each of the states with their total information labeled
for (var i = 0; i < waitlist.length; i++) {
    var markersAll = waitlist[i];
    L.marker(markersAll.coordinates)
        .bindPopup(`<h2> ${markersAll.stateTotal.name}</h2> <hr> 
        <h4>Total: ${markersAll.stateTotal.total}</h4>
        <h4>Kidney: ${markersAll.stateKidney.total}</h4>
        <h4>Liver: ${markersAll.stateLiver.total}</h4>
        <h4>Heart: ${markersAll.stateHeart.total}</h4>`)
        .addTo(myMap);
};
*/

// add invisible circle marker to each of the states with their total information labeled
for (var i = 0; i < waitlist.length; i++) {
    var markersAll = waitlist[i];
    L.circle(markersAll.coordinates, {
      stroke: false,
      fillOpacity: 0, //makes circle invisible
      color: "#fff", //white
      fillColor: "fff", //white
      radius: markerSize(waitlist[i].stateTotal.total)
    })
      .bindPopup(`<h2> ${markersAll.stateTotal.name}</h2> <hr> 
      <h4>Total: ${markersAll.stateTotal.total}</h4>
      <h4>Kidney: ${markersAll.stateKidney.total}</h4>
      <h4>Liver: ${markersAll.stateLiver.total}</h4>
      <h4>Heart: ${markersAll.stateHeart.total}</h4>`)
      .addTo(myMap);
};

