<template>
  <div id="app">
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light py-3" fixed="top">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active px-2">
              <router-link to="/">
                <a class="nav-link nav-link-logo" href=""
                  ><img
                    class="nav-logo"
                    src="https://fontmeme.com/permalink/210311/d153a1caf571032b6296533249d54f0a.png"
                    alt="police-super-mario"
                    border="0" /></a
              ></router-link>
            </li>
            <li class="nav-item dropdown px-2">
              <a
                class="nav-link nav-menu-left dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ $t("menu.category") }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Adventure' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.adventure")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Arcade' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.arcade")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Fighting' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.fighting")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Racing' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.racing")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'MOBA' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.moba")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Music' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.music")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Platform' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.platform")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: {
                      filterType: 'Kind',
                      filterValue: 'Point-and-click',
                    },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.point-and-click")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: {
                      filterType: 'Kind',
                      filterValue: 'RPG',
                    },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.rpg")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: {
                      filterType: 'Kind',
                      filterValue: 'RTS',
                    },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.rts")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Shooter' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.shooter")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Simulator' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.simulator")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Sport' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.sport")
                  }}</a></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Kind', filterValue: 'Strategy' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#">{{
                    $t("gamesKind.strategy")
                  }}</a></router-link
                >
              </div>
            </li>

            <li class="nav-item dropdown px-2">
              <a
                class="nav-link nav-menu-left dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Consoles
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                  :to="{
                    name: 'Games',
                    params: {
                      filterType: 'Platform',
                      filterValue: 'Playstation',
                    },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#"
                    >Playstation</a
                  ></router-link
                >

                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Platform', filterValue: 'Xbox' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#"
                    >Xbox</a
                  ></router-link
                >
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Platform', filterValue: 'Switch' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#"
                    >Switch</a
                  ></router-link
                >

                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Platform', filterValue: 'PC' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#"
                    >PC</a
                  ></router-link
                >
              </div>
            </li>
            <li class="nav-item dropdown px-2">
              <a
                class="nav-link nav-menu-left dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nouveautés
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item nav-item-left" href="#"
                  >Dernières sorties</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item nav-item-left" href="#"
                  >Prochainement</a
                >
              </div>
            </li>
          </ul>
          <ul class="navbar-nav nav-color">
            <li class="nav-item active px-2">
              <router-link to="/"
                ><a class="nav-link nav-menu-right" href="#"
                  ><font-awesome-icon title="Panier" icon="shopping-cart" />
                  <span class="d-none d-xl-inline px-1">Panier</span></a
                ></router-link
              >
            </li>
            <li class="nav-item active px-2">
              <router-link to="/store"
                ><a class="nav-link nav-menu-right" href="#"
                  ><font-awesome-icon title="Magasin" icon="map-marker-alt" />
                  <span class="d-none d-xl-inline px-1">
                    {{ $t("menu.shop") }}</span
                  ></a
                ></router-link
              >
            </li>
            <li class="nav-item dropdown px-2">
              <a
                class="nav-link nav-menu-right dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <font-awesome-icon title="Connexion" icon="user-alt" />
                <span class="d-none d-xl-inline px-1">Connexion</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/login"
                  ><a class="dropdown-item nav-item-right" href="#">{{
                    $t("menu.login")
                  }}</a>
                </router-link>
                <router-link to="/register"
                  ><a class="dropdown-item nav-item-right" href="#">{{
                    $t("menu.register")
                  }}</a>
                </router-link>
              </div>
            </li>

            <li class="nav-item dropdown px-2">
              <a
                class="nav-link nav-menu-right dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ $i18n.locale }}
              </a>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  class="dropdown-item nav-item-right"
                  v-for="(lang, i) in langs"
                  :key="`Lang${i}`"
                  :value="lang"
                  @click="$i18n.locale = lang"
                  >{{ lang }}</a
                >
                <!-- <a class="dropdown-item nav-item-right" href="#">EN</a> -->
              </div>
            </li>
          </ul>

          <form class="form-inline nav-form my-2 my-lg-0 px-2">
            <div class="container">
              <div class="row">
                <div class="col">
                  <input
                    ref="inputSearch"
                    class="form-control nav-control mr-sm-1"
                    type="search"
                    placeholder="Search"
                    v-on:submit.prevent=""
                    v-on:keyup.enter="search"
                  />
                </div>
                <div class="col-pixel-width-40">
                  <button
                    class="btn btn-outline-success my-2 my-sm-0 nav-btn"
                    type="button"
                    v-on:click="search"
                  >
                    <font-awesome-icon icon="search" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
    <img class="nav-banner" src="../assets/banner.gif" />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return { langs: ["en", "fr"] };
  },
  props: {
    content: String,
  },
  methods: {
    focus: function () {
      this.$refs.inputSearch.focus();
    },
    search: function () {
      let searchValue = this.$refs.inputSearch.value;
      if (searchValue === undefined || searchValue === "") return;

      this.$router.push({
        name: "Games",
        params: { filterType: "Search", filterValue: searchValue },
      });
    },
  },
};
</script>
