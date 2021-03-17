<template>
  <div id="mapstore">
    <Map :center="center" />
  </div>
</template>

<script>
import Map from "../components/Map.vue";

export default {
  name: "Store",
  components: {
    Map,
  },
  data() {
    return {
      // we are this as prop to the HereMap component
      center: {
        lat: 40.73061,
        lng: -73.935242,
      },
    };
  },
};
</script>

