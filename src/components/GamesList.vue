<template>
  <div id="games">
    <div class="row">
      <h1 class="d-flex justify-content-center pt-4 pb-4 form-title col-6">
        {{ FilterType }} {{ FilterValue }}
      </h1>
      <div
        class="games-sort-box d-flex justify-content-center align-items-center pt-1 pb-1 col-6"
      >
        <h2 class="ml-1">Sort by</h2>

        <div class="btn-group" role="group" aria-label="...">
          <button type="button" class="btn btn-default">Name</button>
          <button type="button" class="btn btn-default">Date</button>
          <button type="button" class="btn btn-default">Rating</button>
        </div>
      </div>
    </div>

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
          <img
            class="game-cover"
            v-if="game.cover !== undefined"
            :src="game.cover.url"
          />

          <li class="list-group-item game-summary">
            {{ game.summary }}
          </li>
          <li class="list-group-item game-url">
            <font-awesome-icon icon="link" /><span class="mx-2">
              <a v-bind:href="game.url">{{ game.url }}</a>
            </span>
          </li>
        </ul>
      </div>
      <scroll-loader :loader-method="GetGames" :loader-enable="loadMore">
      </scroll-loader>
    </div>
    <div v-else>
      <h1>No game to display :(</h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ScrollLoader from "vue-scroll-loader";
Vue.use(ScrollLoader);

export default {
  name: "GamesList",
  data() {
    return {
      loadMore: false,
      page: 0,
      pageSize: 20,
      games: [],
    };
  },
  methods: {
    async GetGames() {
      if (this.FilterType != null) {
        if (this.FilterType === "Genre") {
          let res = await this.$IgdbService.getGamesByGenre(
            this.FilterValue,
            this.page++,
            this.pageSize
          );
          this.games = this.games.concat(res);

          res.length < this.pageSize && (this.loadMore = false);
        } else if (this.FilterType === "Platform") {
          let res = await this.$IgdbService.getGamesByPlatform(
            this.FilterValue,
            this.page++,
            this.pageSize
          );
          this.games = this.games.concat(res);

          res.length < this.pageSize && (this.loadMore = false);
        }
      }
    },
  },

  mounted() {
    this.GetGames();
    this.loadMore = true;
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
</script>