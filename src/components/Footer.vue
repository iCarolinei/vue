<template>
  <div class="card-group">
    <div class="card footer">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center footer-title">
          Catégories
        </h5>
        <div class="d-flex justify-content-center">
          <div class="card-text footer-text pt-2">
            <p>* Univers playstation</p>
            <p>* Univers xbox</p>
            <p>* Univers nintendo</p>
            <p>* Univers rétro</p>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-center footer-link">
        <small class="text-muted footer-link"
          ><font-awesome-icon title="Magasin" icon="copyright" /> Spooknick
          Games|2021</small
        >
      </div>
    </div>
    <div class="card footer">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center footer-title">
          A propos
        </h5>
        <div class="d-flex justify-content-center">
          <div class="card-text footer-text row pt-2">
            <div class="col-6">
              <p>* Spooknick</p>
              <p>* Magasin</p>
              <p>* Faq</p>
              <p>* Contact</p>
            </div>
            <div class="col-6">
              <p>* Livraison</p>
              <p>* Retours</p>
              <p>* Confidentialité</p>
              <p>* Conditions générales</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-center">
        <small class="text-muted footer-link">
          <font-awesome-icon
            class="mx-2 footer-icon"
            title="Twitter"
            :icon="['fab', 'cc-visa']"
          />
          <font-awesome-icon
            class="mx-2 footer-icon"
            title="Twitter"
            :icon="['fab', 'cc-mastercard']"
          />
          <font-awesome-icon
            class="mx-2 footer-icon"
            title="Twitter"
            :icon="['fab', 'cc-amex']"
          />
        </small>
      </div>
    </div>
    <div class="card footer">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center footer-title">
          Newsletter
        </h5>
        <p class="card-text footer-text pt-2">
          Abonne-toi pour ne jamais rien rater et être au courant des dernières
          nouveautées! ❤️
        </p>
        <div class="d-flex justify-content-center">
          <div class="input-group pt-3 col-8">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input
              type="text d-flex"
              class="form-control"
              placeholder="email@gmail.com "
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-center">
        <small class="text-muted footer-link">
          <a href="https://twitter.com">
            <font-awesome-icon
              class="mx-2 footer-icon"
              title="Twitter"
              :icon="['fab', 'twitter-square']"
          /></a>
          <a href="https://facebook.com">
            <font-awesome-icon
              class="mx-2 footer-icon"
              title="Facebook"
              :icon="['fab', 'facebook-square']"
            />
          </a>
          <a href="https://instagram.com">
            <font-awesome-icon
              class="mx-2 footer-icon"
              title="Instagram"
              :icon="['fab', 'instagram-square']" /></a
        ></small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    content: String,
  },
};
</script>