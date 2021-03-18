<template>
  <div class="card about-spooknick">
    <div class="card-body">
      <h2 class="card-title border-bottom d-flex justify-content-center py-4">
        Mais qui sommes-nous, enfait ? 🎮
      </h2>
      <p class="card-text d-flex justify-content-center pt-4 pb-2">
        <span class="about-style"
          >— Les jeux vidéos, c'est l'histoire de toute une vie. Plus qu'un
          passion, ca finit par faire partie de nous, de notre vie. Alors qui de
          mieux placé pour vous parlez de ce que nous connaissons vraiment
          ?</span
        >
      </p>
      <p class="about-text">
        <span class="about-letter">L'</span>aventure commença un jour comme un
        autre sauf pour nous, évidement. Jeunes motivés et geeks, à la recherche
        de nouveaux défis, nous décidame de monter notre propre start-up contre
        vents et marées. Ce ne fut pas de tout repos mais nous y sommes parvenu:
        nous avons pu conctrétiser notre rêve de toujours.
      </p>
      <p>
        <span class="about-letter-color"
          >Nous sommes un petit magasin de jeux vidéo liègeois</span
        >
        qui a à coeur de bien faire et qui non seulement vend des jeux, et te
        permet de jouer sur des bornes d'arcades/consoles entre amis mais nous
        organisons également des tournois de tes jeux préférés. Depuis janvier
        2021, nous avons le plaisir de te servir, toi notre client fidèle.
        <span class="about-letter-color">
          Merci infiniment de nous soutenir car sans vous, nous n'en serions pas
          la. Ci-dessous, un apercu des services que nous pouvons te
          proposer.</span
        >
      </p>
    </div>

    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
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