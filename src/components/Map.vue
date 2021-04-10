<template>
  <div id="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../assets/marker.png";

export default {
  name: "Map",
  data() {
    return {
      center: [50.6333, 5.56667]
    };
  },
  methods: {
    setupLeafletMap: function() {
      const mapDiv = L.map("mapContainer").setView(this.center, 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1Ijoic3Bvb2tuaWNrIiwiYSI6ImNrbWUxdTk1cjJidTQyb2xhNmJraWZlOWUifQ.h_MnGGQVLTVyIHW02sCzTA"
        }
      ).addTo(mapDiv);

      var markerIcon = L.icon({
        iconUrl: icon,
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
      });

      let marker = L.marker([50.6333, 5.56667], { icon: markerIcon }).addTo(
        mapDiv
      );
      var popup = marker.bindPopup("<b>Notre magasin <3</b>");
      popup.openPopup();
    }
  },
  mounted() {
    this.setupLeafletMap();
  }
};
</script>
