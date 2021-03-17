<template>
  <div id="mapstore">
    <h1 class="d-flex justify-content-center pt-4 pb-4 form-title">
      Magasin ❤️
    </h1>
    <!--<TravelMap class="travel-map" />-->
    <Map class="map" />
  </div>
</template>

<script>
//import Map from "../components/GoogleMapLoader.vue";
// import TravelMap from "../components/TravelMap";
import Map from "../components/Map";
export default {
  name: "Store",
  components: {
    //TravelMap,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.travel-map {
  height: 400px;
}
</style>



