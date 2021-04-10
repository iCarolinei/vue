<template>
  <div class="home px-3">
    <GamesList FilterType="Top" FilterValue="Next" />
    <GamesList FilterType="Top" FilterValue="Last" />
  </div>
</template>

<script>
import GamesList from "../components/GamesList.vue";

export default {
  name: "Home",
  components: {
    GamesList
  }
};
</script>
