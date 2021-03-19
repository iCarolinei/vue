<template>
  <div class="card">
    <div class="card-body border-left border-right container">
      <h1 class="d-flex justify-content-center pt-1 form-title">
        Moyens de paiement ❤️
      </h1>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-warning"
      >
        Tu peux utiliser ses moyens de paiements
      </h4>

      <div class="about-text pt-4 pb-2 d-flex justify-content-center">
        <ul>
          <li class="pt-2">
            <span class="text-primary">• Visa</span>
            <font-awesome-icon
              class="mx-2 icons"
              title="Twitter"
              :icon="['fab', 'cc-visa']"
            />
          </li>
          <li>
            <span class="text-primary">• Meastro</span>
            <font-awesome-icon
              class="mx-2 icons"
              title="Twitter"
              :icon="['fas', 'credit-card']"
            />
          </li>
          <li class="pt-2">
            <span class="text-primary"> • Mastercard</span>
            <font-awesome-icon
              class="mx-2 icons"
              title="Twitter"
              :icon="['fab', 'cc-mastercard']"
            />
          </li>
          <li class="pt-2">
            <span class="text-primary">• Colissimo International</span>
            <font-awesome-icon
              class="mx-2 footer icons"
              title="Twitter"
              :icon="['fab', 'cc-amex']"
            />
          </li>
        </ul>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-warning"
      >
        Nous n'acceptons pas
      </h4>

      <div class="about-text pt-4 pb-2 d-flex justify-content-center">
        <ul>
          <li>
            <span class="text-primary">• Les espèces 💸</span>
          </li>
          <li class="pt-2">
            <span class="text-primary">
              • Les chèques ou mandats postaux 🧾</span
            >
          </li>
        </ul>
      </div>
    </div>

    <img class="img-footer" src="../assets/mario.png" />
  </div>
</template>

<script>
export default {
  name: "Money",
  props: {
    msg: String,
  },
};
</script>
