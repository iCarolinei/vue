<template>
  <!--<GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyAhwbLgAUIkAKGLcr_OjYmz5DBxrFhX3Is"
  />-->

  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyAhwbLgAUIkAKGLcr_OjYmz5DBxrFhX3Is"
  >
    <template slot-scope="{ google, map }">
      {{ map }}
      {{ google }}
    </template>
  </GoogleMapLoader>
</template>



<script>
import GoogleMapLoader from "./GoogleMapLoader";
import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: { lat: 0, lng: 0 },
      };
    },
  },
};
</script>