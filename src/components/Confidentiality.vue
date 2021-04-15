<template>
  <div class="card">
    <div class="card-body border-left border-right container">
      <h1 class="d-flex justify-content-center pt-1 form-title">
        {{ $t("confidentiality.title1") }} ❤️
      </h1>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        {{ $t("confidentiality.title2") }}
      </h4>

      <div class="about-text pt-4 pb-2 d-flex justify-content-center">
        <ul>
          <li>
            <span class="text-primary">• {{ $t("confidentiality.p1") }}</span>
            Spooknick SP
          </li>
          <li class="pt-2">
            <span class="text-primary">• {{ $t("confidentiality.p2") }}</span>
            Unlucky, 52 4000, Liège
          </li>
          <li class="pt-2">
            <span class="text-primary"> • {{ $t("confidentiality.p3") }}</span>
            Unlucky, 52 4000, Liège
          </li>

          <li class="pt-2">
            <span class="text-primary">• {{ $t("confidentiality.p4") }}</span>
            XXX XXX Liège
          </li>
          <li class="pt-2">
            <span class="text-primary">• {{ $t("confidentiality.p5") }}</span>
            BE XXX XXX XXX
          </li>
        </ul>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        {{ $t("confidentiality.title3") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>{{ $t("confidentiality.p6") }}</p>
        <p>
          {{ $t("confidentiality.p7") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        {{ $t("confidentiality.title4") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("confidentiality.p8") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        Cookies
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("confidentiality.p9") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        {{ $t("confidentiality.title5") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("confidentiality.p10") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        {{ $t("confidentiality.title6") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("confidentiality.p11") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        {{ $t("confidentiality.title7") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("confidentiality.p12") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-info"
      >
        {{ $t("confidentiality.title8") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("confidentiality.p13") }}
        </p>
      </div>
    </div>

    <img class="img-footer" src="../assets/4.jpg" />
  </div>
</template>

<script>
export default {
  name: "Confidentiality",
  props: {
    msg: String,
  },
};
</script>
