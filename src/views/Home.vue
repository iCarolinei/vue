<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="CaroChieuse" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
import Igbd from "../api/Igdb.js";

let igdb = new Igbd(
  "sayhrtdt1r6m4g5c8mjj34cz4u9ktk",
  "6sjje1v6hv0exicx0sy14jhxu847ix"
);
igdb.getGamesByGenre("RTS");

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
