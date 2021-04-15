<template>
  <form>
    <div class="form">
      <h1 class="d-flex justify-content-center pt-4 form-title">
        {{ $t("menu.login") }} ❤️
      </h1>
      <div class="form-group">
        <label for="exampleInputEmail1c">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1c"
          aria-describedby="emailHelp"
          placeholder="gta-v@gmail.com"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1a">{{ $t("form.pass") }}</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1a"
          placeholder="******"
        />
      </div>
      <div class="form-group form-check mt-4 form-valid">
        <input type="checkbox" class="form-check-input" id="exampleCheck1b" />
        <label class="form-check-label" for="exampleCheck1b">{{
          $t("form.box")
        }}</label>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info my-4 p-2">
          {{ $t("contact.btn") }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormLogin",
  props: {
    content: String,
  },
};
</script>
