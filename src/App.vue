<template>
  <div id="app ">
    <div id="navbar">
     <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link" href="#"><router-link to="/">Hello</router-link></a>
  
        </li>
         <li class="nav-item dropdown">
    <router-link to="/test"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">est </a></router-link>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
        <li class="nav-item">
    <a class="nav-link" href="#"><router-link to="/test">Test</router-link></a>
  </li>
      
</ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./style.scss";
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

</style>
