const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
      const markerDomEl = document.createElement("div"); // Create a new, detached DIV
      markerDomEl.style.width = coords[0];
      markerDomEl.style.height = coords[1];
      markerDomEl.style.backgroundImage = iconURLs[type];
      return markerDomEl;
};

module.exports = buildMarker;
