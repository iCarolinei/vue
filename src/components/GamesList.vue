<template>
  <div id="games">
    <h1 class="d-flex justify-content-center pt-4 pb-4 form-title">
      {{ FilterType }} {{ FilterValue }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "GamesList",
  props: {
    FilterType: String,
    FilterValue: String,
  },
};
</script>