<template>
  <div id="games">
    <h1 class="d-flex justify-content-center pt-4 pb-4 form-title">
      {{ FilterType }} {{ FilterValue }}
    </h1>
    <!-- <div id="list" class="d-flex flex-wrap flex-row col-12"> -->
    <div
      id="games-list"
      class="d-flex flex-wrap flex-row col-12"
      v-if="games !== undefined"
    >
      <div v-for="game in games" :key="game.id">
        <ul class="list-group list-group-flush">
          <li class="list-group-item game-title">
            {{ game.name }}
          </li>

          <li class="list-group-item game-summary">
            {{ game.summary }}
          </li>
          <li class="list-group-item game-url">
            <font-awesome-icon icon="link" /><span class="mx-2">{{
              game.url
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <h1>No games to display :(</h1>
    </div>
  </div>
</template>

<script>
let _this = null;
export default {
  name: "GamesList",
  data() {
    _this = this;

    return {
      games: GetGames(),
    };
  },

  props: {
    FilterType: {
      default: null,
      type: String,
    },
    FilterValue: {
      default: null,
      type: String,
    },
  },
};

async function GetGames() {
  if (_this.FilterType != null) {
    if (_this.FilterType === "Genre") {
      _this.games = await _this.$IgdbService.getGamesByGenre(_this.FilterValue);
    }
  }
}
</script>