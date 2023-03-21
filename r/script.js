// Set Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiaHVhbGYxOTk1IiwiYSI6ImNsZTUxM2R4cTAydXEzcHF4dzlqazdzMHcifQ.E52zugBuLvbmJn0kdLrMLg';

// Create a new Mapbox GL JS map instance
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // map style URL
  center: [35.4284, 3.1412], // starting position [lng, lat] for Turkana county
  zoom: 8 // starting zoom level
});

// Define the coordinates and names of water sources in Turkana county
const waterSources = [
  { name: 'Lodwar', coordinates: [35.6079, 3.1212] },
  { name: 'Kakuma', coordinates: [34.9162, 3.7128] },
  { name: 'Nakwamoru', coordinates: [35.1686, 3.8155] },
  { name: 'Kalobeyei', coordinates: [34.8327, 3.9276] }
];

// Add a marker for each water source
waterSources.forEach(waterSource => {
  new mapboxgl.Marker()
    .setLngLat(waterSource.coordinates)
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${waterSource.name}</h3>`))
    .addTo(map);
});

// Add event listener to change map style
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');
for (const input of inputs) {
  input.onclick = (layer) => {
    const layerId = layer.target.id;
    if (layerId === 'uber-driver-light') {
      map.setStyle('https://dyguxp1m9tbrw.cloudfront.net/style/default/web');
    } else if (layerId === 'uber-driver-dark') {
      map.setStyle('https://dyguxp1m9tbrw.cloudfront.net/style/default/web?mode=night');
    } else {
      map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
  };
}
