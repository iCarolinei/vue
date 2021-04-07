<template>
  <div id="skybox" class="skybox">
    <router-link to="/">
      <div class="txt">Game over <br /><span>404 FILE NOT FOUND</span></div>
      <div id="player" class="idle"></div
    ></router-link>
    <div class="ground"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

