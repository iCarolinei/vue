<template>
  <div class="container">
    <p>Prout</p>
    <h1>{{ content }}</h1>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    content: String
  }
};
</script>
