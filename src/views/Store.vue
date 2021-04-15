<template>
  <div class="map-store">
    <div id="mapstore">
      <h1 class="d-flex justify-content-center pt-4 pb-4 form-title">
        {{ $t("menu.shop") }} ❤️
      </h1>
      <Map class="map" />
      <h5 class="pt-4 pb-2 d-flex justify-content-center map-title">
        🎮 {{ $t("shop.title") }}
      </h5>
      <div class="d-flex justify-content-center">
        <ul class="pb-2 d-flex flex-column">
          <li>Spooknick Games</li>
          <li>Unlucky, 52</li>
          <li>4000, Liège</li>
          <li>0465 xx xx xx</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "../components/Map";
export default {
  name: "Store",
  components: {
    Map,
  },
};
</script>
