<template>
  <div id="mapstore">
    <TravelMap class="travel-map" />
  </div>
</template>

<script>
//import Map from "../components/GoogleMapLoader.vue";
import TravelMap from "../components/TravelMap";
export default {
  name: "Store",
  components: {
    TravelMap,
  },
};
</script>

<style lang="scss" scoped>
.travel-map {
  height: 400px;
}
</style>



