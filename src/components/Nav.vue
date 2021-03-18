<template>
  <div id="app">
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
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
                Catégories
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Genre', filterValue: 'Action' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#"
                    >Action</a
                  ></router-link
                >

                <router-link
                  :to="{
                    name: 'Games',
                    params: { filterType: 'Genre', filterValue: 'Aventure' },
                  }"
                  ><a class="dropdown-item nav-item-left" href="#"
                    >Aventure</a
                  ></router-link
                >
                <a class="dropdown-item nav-item-left" href="#">Combat</a>
                <a class="dropdown-item nav-item-left" href="#">Course</a>
                <a class="dropdown-item nav-item-left" href="#">Education</a>
                <a class="dropdown-item nav-item-left" href="#"
                  >Musique et Rythme</a
                >
                <a class="dropdown-item nav-item-left" href="#">Plateforme</a>
                <a class="dropdown-item nav-item-left" href="#">RPG</a>
                <a class="dropdown-item nav-item-left" href="#">Reflexion</a>
                <a class="dropdown-item nav-item-left" href="#">Shooter</a>
                <a class="dropdown-item nav-item-left" href="#">Simulation</a>
                <a class="dropdown-item nav-item-left" href="#">Sports</a>
                <a class="dropdown-item nav-item-left" href="#">Stratégie</a>
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
                <a class="dropdown-item nav-item-left" href="#">Playstation</a>
                <a class="dropdown-item nav-item-left" href="#">Xbox</a>
                <a class="dropdown-item nav-item-left" href="#">Switch</a>
                <a class="dropdown-item nav-item-left" href="#">Ds</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item nav-item-left" href="#">Retro</a>
                <a class="dropdown-item nav-item-left" href="#">Pc</a>
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
                <router-link to="/register"
                  ><a class="dropdown-item nav-item-left" href="#"
                    >Dernières sorties</a
                  ></router-link
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
                  <span class="d-none d-xl-inline px-1">Magasin</span></a
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
                  ><a class="dropdown-item nav-item-right" href="#">Login</a>
                </router-link>
                <router-link to="/register"
                  ><a class="dropdown-item nav-item-right" href="#">Register</a>
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
                Fr
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item nav-item-right" href="#">FR</a>
                <a class="dropdown-item nav-item-right" href="#">EN</a>
              </div>
            </li>
          </ul>

          <form class="form-inline nav-form my-2 my-lg-0 px-2">
            <div class="container">
              <div class="row">
                <div class="col">
                  <input
                    class="form-control nav-control mr-sm-1"
                    type="search"
                    placeholder="Search"
                  />
                </div>
                <div class="col-pixel-width-40">
                  <button
                    class="btn btn-outline-success my-2 my-sm-0 nav-btn"
                    type="submit"
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
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    content: String,
  },
};
</script>