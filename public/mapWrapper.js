const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);
  this.map.on("click", function(event){
    this.addMarker(event.latlng);
  }.bind(this))
}

var handleButtonClick = function () {
  this.panToSomewhere([55.801507, -4.003805])
  // this.map.panTo([55.801507, -4.003805])

}

MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.panToSomewhere = function (coords) {
  this.map.panTo(coords)
};
