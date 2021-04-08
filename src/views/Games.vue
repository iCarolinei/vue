<template>
  <div class="px-3">
    <GamesList :FilterType="filterType" :FilterValue="filterValue" />
  </div>
</template>

<script>
import GamesList from "../components/GamesList.vue";

export default {
  name: "Games",
  components: {
    GamesList,
  },
  props: {
    filterType: String,
    filterValue: String,
  },
};
</script>
