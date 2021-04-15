<template>
  <div class="card">
    <div class="card-body border-left border-right container">
      <h1 class="d-flex justify-content-center pt-1 form-title">
        {{ $t("faq.title3") }} ❤️
      </h1>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-primary"
      >
        {{ $t("delivery.title1") }}
      </h4>

      <div class="about-text pt-4 pb-2">
        <p>🚚 {{ $t("delivery.p1") }}</p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-primary"
      >
        {{ $t("delivery.title2") }}
      </h4>

      <div class="about-text pt-4 pb-2">
        <ul>
          <li>
            <span class="text-primary">• Chronopost 13H :</span>

            {{ $t("delivery.p2") }}
          </li>
          <li class="pt-2">
            <span class="text-primary">• Colissimo :</span>
            {{ $t("delivery.p3") }}
          </li>
          <li class="pt-2">
            <span class="text-primary"> • Chrono Relais 13 :</span>
            {{ $t("delivery.p4") }}
          </li>
          <li class="pt-2">
            <span class="text-primary">• Colissimo International :</span>
            {{ $t("delivery.p5") }}
          </li>
        </ul>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-primary"
      >
        {{ $t("delivery.title3") }}
      </h4>

      <div class="about-text pt-4 pb-2">
        <p>📦 {{ $t("delivery.p6") }}</p>
      </div>
    </div>

    <img class="img-footer" src="../assets/c.png" />
  </div>
</template>

<script>
export default {
  name: "SendingDelivery",
  props: {
    msg: String,
  },
};
</script>
