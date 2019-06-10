ymaps.ready(init);

var myMap;


function init() {
  myMap = new ymaps.Map("YMapsID", {
      center: [47.21637007, 38.89661691],
      zoom: 14,           
  });

  myMap.controls
  .add('zoomControl')
  .add('mapTools')
}