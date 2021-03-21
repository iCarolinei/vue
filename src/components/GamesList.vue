<template>
  <div id="games ">
    <div class="row">
      <h1 class="d-flex justify-content-center pt-4 pb-3 form-title col-12">
        {{ FilterType }} {{ FilterValue }}
      </h1>
      <div class="games-sort-box d-flex justify-content-center row col-12">
        <h5 class="ml-1 keep-spaces pr-2 text-info">Sort by</h5>

        <b-button-group class="games-sort-buttons pb-3">
          <b-button
            @click="SortBy('Name')"
            :pressed="false"
            :disabled="loading == true"
            :variant="sortNameVariant"
            >Name</b-button
          >
          <b-button
            @click="SortBy('Date')"
            :pressed="false"
            :disabled="loading == true"
            :variant="sortDateVariant"
            >Date</b-button
          >
          <b-button
            @click="SortBy('Rating')"
            :pressed="false"
            :disabled="loading == true"
            :variant="sortRatingVariant"
            >Rating</b-button
          >
        </b-button-group>
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
          <li class="list-group-item">
            {{ $func.unixTimestampToDate(game.first_release_date) }}
            Rating {{ getRating(game.rating) }}
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
      loading: false,
      page: 0,
      pageSize: 20,
      sort: "Name",
      sortOrder: "asc",
      games: [],
      sortNameVariant: "success",
      sortDateVariant: "info",
      sortRatingVariant: "info",
    };
  },
  methods: {
    ComputeSortVariant() {
      this.sortNameVariant = "info";
      this.sortDateVariant = "info";
      this.sortRatingVariant = "info";

      switch (this.sort) {
        case "Name":
          this.sortNameVariant =
            this.sortOrder === "asc" ? "success" : "warning";
          break;
        case "Date":
          this.sortDateVariant =
            this.sortOrder === "desc" ? "success" : "warning";
          break;
        case "Rating":
          this.sortRatingVariant =
            this.sortOrder === "desc" ? "success" : "warning";
          break;
      }
    },
    getRating(rating) {
      if (rating === undefined) return "";
      return rating.toFixed(2);
    },
    async SortBy(criteria) {
      if (this.sort === criteria) {
        if (this.sortOrder === "asc") {
          this.sortOrder = "desc";
        } else {
          this.sortOrder = "asc";
        }
      } else {
        if (criteria === "Name") this.sortOrder = "asc";
        else this.sortOrder = "desc";
        this.sort = criteria;
      }

      this.ComputeSortVariant();

      this.page = 0;
      this.games = [];
      this.loadMore = false;
      await this.GetGames();
    },
    async GetGames() {
      this.loading = true;
      if (this.FilterType != null) {
        if (this.FilterType === "Genre") {
          let res = await this.$IgdbService.getGamesByGenre(
            this.FilterValue,
            this.page++,
            this.pageSize,
            this.sort,
            this.sortOrder
          );
          this.games = this.games.concat(res);

          res.length < this.pageSize && (this.loadMore = false);
        } else if (this.FilterType === "Platform") {
          let res = await this.$IgdbService.getGamesByPlatform(
            this.FilterValue,
            this.page++,
            this.pageSize,
            this.sort,
            this.sortOrder
          );
          this.games = this.games.concat(res);

          res.length < this.pageSize && (this.loadMore = false);
        }
      }
      this.loading = false;
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