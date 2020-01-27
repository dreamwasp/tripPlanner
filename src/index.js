const mapboxgl = require("mapbox-gl");
const marker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHJlYW13YXNwIiwiYSI6ImNrNXdwc3UxMjF4bHczbG1xNWl0OXU3ZnAifQ.WIp81Ql5dpL2nKFV5aer_Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const mark = marker([-74.009, 40.705], "restaurant");

mark.addTo(map);
