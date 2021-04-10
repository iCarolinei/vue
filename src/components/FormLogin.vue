<template>
  <form>
    <div class="form">
      <h1 class="d-flex justify-content-center pt-4 form-title">Login ❤️</h1>
      <div class="form-group">
        <label for="exampleInputEmail1c">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1c"
          aria-describedby="emailHelp"
          placeholder="Inscris ton email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1a">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1a"
          placeholder="Inscris ton mot de passe"
        />
      </div>
      <div class="form-group form-check mt-4 form-valid">
        <input type="checkbox" class="form-check-input" id="exampleCheck1b" />
        <label class="form-check-label" for="exampleCheck1b"
          >Se souvenir de moi</label
        >
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info my-4 p-2">Soumettre</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormLogin",
  props: {
    content: String
  }
};
</script>
