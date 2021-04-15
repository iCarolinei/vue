<template>
  <div class="card about-spooknick">
    <div class="card-body border-left border-right container">
      <h2 class="card-title border-bottom d-flex justify-content-center py-3">
        {{ $t("spooknick.title1") }} 🎮
      </h2>
      <p class="card-text d-flex justify-content-center pt-4 pb-2">
        <span class="about-style"> {{ $t("spooknick.p1") }}</span>
      </p>
      <p class="about-text">
        <span class="about-letter"> {{ $t("spooknick.title3") }}</span>
        {{ $t("spooknick.p2") }}
      </p>
      <p>
        <span class="about-letter-color"> {{ $t("spooknick.title2") }}</span>

        {{ $t("spooknick.p3") }}
        <span class="about-letter-color"> {{ $t("spooknick.p4") }}</span>
        😉
      </p>
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="400"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            img-src="https://picsum.photos/1024/400?grayscale"
          ></b-carousel-slide>

          <b-carousel-slide img-src="https://picsum.photos/1024/400">
          </b-carousel-slide>

          <b-carousel-slide
            img-src="https://picsum.photos/1024/400/?image=58"
          ></b-carousel-slide>

          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/400/?image=55"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSpooknick",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
