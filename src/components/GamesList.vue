<template>
  <div id="games ">
    <div class="row">
      <h1 class="d-flex justify-content-center pt-4 pb-3 form-title col-12">
        {{ getTitle() }}
      </h1>
      <div
        class="games-sort-box d-flex justify-content-center row col-12"
        v-if="FilterType != 'Search' && FilterType != 'Top'"
      >
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
      class="d-flex flex-wrap flex-row justify-content-center col-12"
      v-if="games !== undefined"
    >
      <div
        class="card shadow my-3 bg-white rounded mx-3 game-col"
        v-for="game in games"
        :key="game.id"
      >
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item game-title d-flex justify-content-center py-4"
          >
            {{ game.name }}
          </li>

          <li
            class="list-group-item text-info p-3 d-flex justify-content-around align-items-center col-12"
          >
            <div class="game-date">
              {{ $func.unixTimestampToDate(game.first_release_date) }}
            </div>
            <div class="rating">{{ getRating(game.rating) }}</div>
          </li>
          <div class="d-flex justify-content-center">
            <img
              class="game-cover card-img-top pt-4"
              v-if="game.cover !== undefined"
              :src="game.cover.url"
            />
            <img
              class="game-cover card-img-top pt-4"
              v-else
              src="../assets/notfound.jpg"
            />
          </div>

          <li
            class="list-group-item text-secondary game-summary d-flex justify-content-center py-4"
            v-if="game.summary !== undefined"
          >
            {{ getSummary(game.summary) }}
          </li>
          <li
            class="list-group-item text-secondary game-summary d-flex justify-content-center py-4"
            v-else
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            deserunt dicta itaque earum cumque at possimus ipsum. Dolorum velit
            suscipit facilis pariatur aliquid dignissimos, in distinctio
            molestiae corrupti minima perspiciatis. Dolorum velit suscipit
            facilis pariatur aliquid dignissimos, in (...)
          </li>
          <li class="d-flex flex-row justify-content-center align-self-center">
            <img
              class="platform-img card-img-top pt-4 m-1"
              v-for="platform in game.platforms"
              :key="platform.id"
              :src="platform.imageUrl"
              :title="platform.name"
              :alt="platform.name"
            />
          </li>
          <li class="list-group-item game-url d-flex justify-content-center">
            <font-awesome-icon icon="link" /><span class="mx-2">
              <a v-bind:href="game.url">{{ game.url }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div v-else>
      <h1>No game to display :(</h1>
    </div>
    <scroll-loader :loader-method="GetGames" :loader-disable="!loadMore">
    </scroll-loader>
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
      sortNameVariant: "primary",
      sortDateVariant: "secondary",
      sortRatingVariant: "secondary",
    };
  },
  methods: {
    getTitle() {
      switch (this.FilterType) {
        case "Kind":
          return (
            this.$t("gamesList.title_kind") +
            " > " +
            this.$t("gamesKind." + this.FilterValue.toLowerCase())
          );
        case "Platform":
          return this.$t("gamesList.title_platform") + " > " + this.FilterValue;
        case "Search":
          return this.$t("gamesList.title_search") + ": " + this.FilterValue;
        case "Top":
          if (this.FilterValue === "Next")
            return this.$t("gamesList.title_nextReleases");
          else if (this.FilterValue === "Last")
            return this.$t("gamesList.title_lastReleases");
      }
    },
    ComputeSortVariant() {
      this.sortNameVariant = "secondary";
      this.sortDateVariant = "secondary";
      this.sortRatingVariant = "secondary";
      switch (this.sort) {
        case "Name":
          this.sortNameVariant =
            this.sortOrder === "asc" ? "primary" : "warning";
          break;
        case "Date":
          this.sortDateVariant =
            this.sortOrder === "desc" ? "primary" : "warning";
          break;
        case "Rating":
          this.sortRatingVariant =
            this.sortOrder === "desc" ? "primary" : "warning";
          break;
      }
    },
    getRating(rating) {
      if (rating === undefined) return "";
      return rating.toFixed(2);
    },
    SetRating() {
      const ratings = document.querySelectorAll(".rating");

      // Iterate over all rating items
      ratings.forEach((rating) => {
        if (rating.classList.length > 1) return;

        let scoreClass = "default";

        const ratingContent = rating.innerHTML;
        let ratingScore = "N/A";
        if (ratingContent !== "") {
          ratingScore = parseInt(ratingContent, 10);
          scoreClass =
            ratingScore < 50 ? "bad" : ratingScore < 70 ? "meh" : "good";
        }

        // Add score class to the rating
        rating.classList.add(scoreClass);

        // After adding the class, get its color
        const ratingColor = window.getComputedStyle(rating).backgroundColor;

        // Define the background gradient according to the score and color
        const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

        // Set the gradient as the rating background
        rating.setAttribute("style", gradient);

        // Wrap the content in a tag to show it above the pseudo element that masks the bar
        rating.innerHTML = `<span>${ratingScore} ${
          ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
        }</span>`;
      });
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
        if (this.FilterType === "Kind") {
          let res = await this.$IgdbService.getGamesByGenre(
            this.FilterValue,
            this.page++,
            this.pageSize,
            this.sort,
            this.sortOrder
          );
          this.games = this.games.concat(res);
          this.loadMore = !(res.length < this.pageSize);
        } else if (this.FilterType === "Platform") {
          let res = await this.$IgdbService.getGamesByPlatform(
            this.FilterValue,
            this.page++,
            this.pageSize,
            this.sort,
            this.sortOrder
          );
          this.games = this.games.concat(res);
          this.loadMore = !(res.length < this.pageSize);
        } else if (this.FilterType === "Search") {
          let res = await this.$IgdbService.getGamesBySearch(
            this.FilterValue,
            this.page++,
            this.pageSize,
            this.sort,
            this.sortOrder
          );

          let arr = this.games.concat(res);

          this.games = arr.reduce((acc, current) => {
            const x = acc.find((item) => item.id === current.id);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);

          this.loadMore = !(res.length < this.pageSize);
        } else if (this.FilterType === "Top") {
          let res = await this.$IgdbService.getGamesByTop(
            this.FilterValue,
            this.page,
            this.pageSize
          );

          let arr = this.games.concat(res);

          this.games = arr.reduce((acc, current) => {
            const x = acc.find((item) => item.id === current.id);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);

          this.loadMore = false;
        }
      }
      this.loading = false;
    },
    getSummary(summary) {
      if (summary === undefined) return "";
      if (summary.length > 300) {
        summary = summary.substring(0, 300);
        let endingChars = [" ", ".", "?", "!"];
        while (summary.length > 0) {
          if (endingChars.includes(summary[summary.length - 1])) break;

          summary = summary.substring(0, summary.length - 1);
        }

        return summary + " (...)";
      }

      return summary;
    },
  },
  async mounted() {
    await this.GetGames();
    this.loadMore = true;
  },
  updated() {
    this.SetRating();
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
