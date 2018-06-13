const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
  // var button = document.querySelector('button');
  // button.addEventListener('click', handleButtonClick);
  this.map.on("click", function(event){
    this.addMarker(event.latlng);
  }.bind(this))
}



MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.panToSomewhere = function (coords) {
  this.map.panTo(coords)
};
