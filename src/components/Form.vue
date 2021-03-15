<template>
  <div class="form">
    <h1 class="d-flex justify-content-center pt-4 form-title">Register ❤️</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Prénom</label>
        <input
          type="name"
          class="form-control"
          id="exampleInputName1"
          aria-describedby="NameHelp"
          placeholder="Inscris ton prénom"
        />
        <small id="NameHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Nom</label>
        <input
          type="name"
          class="form-control"
          id="exampleInputName1"
          aria-describedby="NameHelp"
          placeholder="Inscris ton nom"
        />
        <small id="NameHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Pseudo</label>
        <input
          type="name"
          class="form-control"
          id="exampleInputName1"
          aria-describedby="NameHelp"
          placeholder="Inscris ton pseudo"
        />
        <small id="NameHelp" class="form-text text-muted"></small>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Inscris ton email"
        />
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Inscris ton Password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirme mot de passe</label>
        <input
          type="confirmPassword"
          class="form-control"
          id="exampleInputConfirmPassword1"
          placeholder="Confirme ton mot de passe"
        />
      </div>
      <div class="form-check mt-4 form-valid">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1"
          >J’ai lu et j’accepte les conditions générales d'utilisation</label
        >
      </div>
      <div class="form-check mt-2 form-valid">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1"
          >Je souhaite recevoir les newsletters et les bons plans
          Spooknick</label
        >
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info my-4 p-2">Soumettre</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    content: String,
  },
};
</script>
