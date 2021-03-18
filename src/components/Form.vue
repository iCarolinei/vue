<template>
  <div class="form">
    <h1 class="d-flex justify-content-center pt-4 form-title">Register ❤️</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputName">Prénom</label>
        <input
          type="name"
          class="form-control"
          id="exampleInputName"
          aria-describedby="NameHelp"
          placeholder="Inscris ton prénom"
        />
        <small id="SNameHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputSecond">Nom</label>
        <input
          type="name"
          class="form-control"
          id="exampleInputSecond"
          aria-describedby="SNameHelp"
          placeholder="Inscris ton nom"
        />
        <small id="PseudoHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputPseudo">Pseudo</label>
        <input
          type="name"
          class="form-control"
          id="exampleInputPeusod"
          aria-describedby="PseudoHelp"
          placeholder="Inscris ton pseudo"
        />
        <small id="EmailHelp" class="form-text text-muted"></small>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail"
          aria-describedby="EmailHelp"
          placeholder="Inscris ton email"
        />
        <small id="MdpHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputMdp">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputMdp"
          placeholder="Inscris ton mot de passe"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputMdp2">Confirme mot de passe</label>
        <input
          type="confirmPassword"
          class="form-control"
          id="exampleInputMdp2"
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
        <input type="checkbox" class="form-check-input" id="exampleCheck2" />
        <label class="form-check-label" for="exampleCheck2"
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
