var mapdata = [{
    type: "choroplethmapbox",
    locations: ["BYM", "GPT", "MJN", "TBL"],
    z: [16, 29, 20, 25, 10, 30],
    colorscale:"Viridis",
    geojson: "https://raw.githubusercontent.com/husdet/upload/main/smgpenduduk2015.json"
  }];

/* percobaan membuat mapdata lebih dari satu */
/* var map2016 = {
  type: "choroplethmapbox",
  locations: ["BYM", "GPT", "MJN", "TBL"],
  z: [10, 23, 7, 20],
  colorscale:"Viridis",
  geojson: "https://raw.githubusercontent.com/husdet/upload/main/smgpenduduk2015.json"
};

var map2017 = {
  type: "choroplethmapbox",
  locations: ["BYM", "GPT", "MJN", "TBL"],
  z: [21, 17, 14, 26],
  colorscale:"Viridis",
  geojson: "https://raw.githubusercontent.com/husdet/upload/main/smgpenduduk2015.json"
}; */

/* var mapsdata = [map2015, map2016, map2017]; */

var layout = {
  mapbox: { center: {lon: 110.4025, lat: -7.0589}, zoom: 11},
          width: 1366, height: 580
        };

var config = {mapboxAccessToken: "pk.eyJ1IjoiaHVzZGV0IiwiYSI6ImNrbnJqaWl5bTA5bm4ydnBqOHE4YmN4M20ifQ.Ac9W_3M7p_dJNB7v6jLrrw"};

Plotly.newPlot('choro', mapdata, layout, config);