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
              <router-link to="/"
                ><a class="nav-link" href="#">Home</a></router-link
              >
            </li>
            <li class="nav-item dropdown px-2">
              <a
                class="nav-link dropdown-toggle"
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
                <router-link to="/test"
                  ><a class="dropdown-item" href="#">Action</a></router-link
                >
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

            <li class="nav-item dropdown px-2">
              <a
                class="nav-link dropdown-toggle"
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
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown px-2">
              <a
                class="nav-link dropdown-toggle"
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
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav nav-color">
            <li class="nav-item active px-2">
              <router-link to="/"
                ><a class="nav-link" href="#"
                  ><font-awesome-icon title="Panier" icon="shopping-cart" />
                  <span class="d-none d-xl-inline px-1">Panier</span></a
                ></router-link
              >
            </li>
            <li class="nav-item active px-2">
              <router-link to="/test"
                ><a class="nav-link" href="#"
                  ><font-awesome-icon title="Magasin" icon="map-marker-alt" />
                  <span class="d-none d-xl-inline px-1">Magasin</span></a
                ></router-link
              >
            </li>
            <li class="nav-item dropdown px-2">
              <a
                class="nav-link dropdown-toggle"
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
                <a class="dropdown-item" href="#">Login</a>
                <a class="dropdown-item" href="#">Register</a>
              </div>
            </li>
            <li class="nav-item dropdown px-2">
              <a
                class="nav-link dropdown-toggle"
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
                <a class="dropdown-item" href="#">En</a>
              </div>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0 px-2">
            <div class="container">
              <div class="row">
                <div class="col">
                  <input
                    class="form-control test mr-sm-1"
                    type="search"
                    placeholder="Search"
                  />
                </div>
                <div class="col-pixel-width-40">
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
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
    <img class="nav-banner" src="./assets/banner.gif" />
    <router-view />
  </div>
</template>


<style lang="scss">
@import "./style.scss";
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
</style>
