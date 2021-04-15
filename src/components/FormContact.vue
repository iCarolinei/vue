<template>
  <form>
    <div class="form">
      <h1 class="d-flex justify-content-center pt-4">
        {{ $t("contact.title") }}
      </h1>
      <div class="form-group">
        <label for="nameLastName"> {{ $t("contact.name") }}</label>
        <input
          type="text"
          class="form-control"
          id="nameLastName"
          aria-describedby="nameLastName"
          placeholder="Morgan Arthur"
        />
      </div>
      <div class="form-group">
        <label for="emailContact">Email</label>
        <input
          type="email"
          class="form-control"
          id="emailContact"
          placeholder="cyberpunk@gmail"
        />
      </div>
      <div class="form-floating">
        <label for="emailContact">{{ $t("contact.comment") }}</label>
        <textarea
          class="form-control"
          placeholder="😁"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info my-4 p-2">
          {{ $t("contact.btn") }}
        </button>
      </div>
      <div class="container-bird">
        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>

        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormContact",
  props: {
    content: String,
  },
};
</script>
