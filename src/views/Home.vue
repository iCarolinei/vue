<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <GamesList FilterType="Top" FilterValue="Next" />
    <GamesList FilterType="Top" FilterValue="Last" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
import GamesList from "../components/GamesList.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    GamesList,
  },
};
</script>
