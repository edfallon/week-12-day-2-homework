const drawMap = function(){
  const mapDiv = document.getElementById('main-map');
  const glasgow = [55.86515, -4.25763];
  const javaStreet = [55.801507, -4.003805];
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, javaStreet, zoomLevel);
  // mainMap.addMarker(javaStreet);
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick(mainMap));
};


var handleButtonClick = function (mainMap) {
  mainMap.panToSomewhere([41.142937, -8.534538])


}

window.addEventListener('load', drawMap);
