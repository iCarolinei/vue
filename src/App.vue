<template>
  <div>
    <header class="app-header">
      <Nav></Nav>
    </header>
    <header class="app-header">
      <Footer></Footer>
    </header>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
@import "./style.scss";
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
</style>
