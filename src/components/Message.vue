<template>
  <div class="container">
    <h1>Prout</h1>
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
