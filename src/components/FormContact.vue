<template>
  <form>
    <div class="form">
      <h1 class="d-flex justify-content-center pt-4">Contact-nous ❤️</h1>
      <div class="form-group">
        <label for="nameLastName">Nom et prénom</label>
        <input
          type="text"
          class="form-control"
          id="nameLastName"
          aria-describedby="nameLastName"
          placeholder="Inscrit ton nom et prénom"
        />
      </div>
      <div class="form-group">
        <label for="emailContact">Email</label>
        <input
          type="password"
          class="form-control"
          id="emailContact"
          placeholder="Inscris ton email"
        />
      </div>
      <div class="form-floating">
        <label for="emailContact">Ton commentaire</label>
        <textarea
          class="form-control"
          placeholder="Laisse ton petit commentaire ici 😁"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info my-4 p-2">Soumettre</button>
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