// console.log("hello world")

let object = document.getElementsByTagName("object")

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5mb3JoYW4iLCJhIjoiY2tkeXFuZW02M2ZhbzJzcXFrcGp0MmhvayJ9.tsgIldRIl3AjNdNlzSa5qQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

new mapboxgl.Marker(object.element).setLngLat([-74.009151, 40.705086]).addTo(map);
new mapboxgl.Marker(object.element).setLngLat([-87.641, 41.895]).addTo(map);