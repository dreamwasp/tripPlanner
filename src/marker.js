const mapboxgl = require("mapbox-gl");

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = `url()`;
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const locationMarkerFinder = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
  }



const markerMaker = function (cordsArr, type) {
let markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = `url(${locationMarkerFinder[type]})`;
 return new mapboxgl.Marker(markerDomEl).setLngLat(cordsArr)
}


module.exports = markerMaker;
