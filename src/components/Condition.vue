<template>
  <div class="card">
    <div class="card-body border-left border-right container">
      <h1 class="d-flex justify-content-center pt-1 form-title">
        {{ $t("condition.title1") }} ❤️
      </h1>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-danger"
      >
        {{ $t("condition.title2") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("condition.p1") }}
        </p>
        <p>
          {{ $t("condition.p2") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-danger"
      >
        {{ $t("condition.title3") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("condition.p3") }}
        </p>
        <p>
          {{ $t("condition.p4") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-danger"
      >
        {{ $t("condition.title4") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("condition.p5") }}
        </p>
        <p>
          {{ $t("condition.p6") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-danger"
      >
        {{ $t("condition.title5") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("condition.p7") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-danger"
      >
        {{ $t("condition.title6") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("condition.p8") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-danger"
      >
        {{ $t("condition.title7") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("condition.p9") }}
        </p>
        <p>
          {{ $t("condition.p10") }}
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-danger"
      >
        {{ $t("condition.title8") }}
      </h4>

      <div class="pt-4 pb-2 about-text">
        <p>
          {{ $t("condition.p11") }}
        </p>
      </div>
    </div>

    <img class="img-footer" src="../assets/6.gif" />
  </div>
</template>

<script>
export default {
  name: "Condition",
  props: {
    msg: String,
  },
};
</script>
