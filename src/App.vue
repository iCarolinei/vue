<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hello</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
