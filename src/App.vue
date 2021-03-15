<template>
  <div>
    <header class="app-header">
      <Nav></Nav>
    </header>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
</style>
