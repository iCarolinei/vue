<template>
  <div id="skybox" class="skybox">
    <router-link to="/">
      <div class="txt">Game over <br /><span>404 FILE NOT FOUND</span></div>
      <div ref="player" id="player" class="idle"></div
    ></router-link>
    <div class="ground"></div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    msg: String
  },
  methods: {
    walkLeft() {
      this.$refs.player.className = "walk-left";
      setTimeout(this.searchLeft, 1000);
    },
    searchLeft() {
      this.$refs.player.className = "search-left";
      // player.style.left = "40%";
      setTimeout(this.walkRight, 3000);
    },
    walkRight() {
      this.$refs.player.className = "walk-right";
      setTimeout(this.searchRight, 1000);
    },
    searchRight() {
      this.$refs.player.className = "search-right";
      // player.style.left = "60%";
      setTimeout(this.walkLeft, 3000);
    }
  },
  mounted: function() {
    this.walkLeft();
  }
};
</script>
