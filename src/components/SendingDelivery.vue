<template>
  <div class="card">
    <div class="card-body border-left border-right container">
      <h1 class="d-flex justify-content-center pt-1 form-title">
        Livraison/retour ❤️
      </h1>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-primary"
      >
        Qestions courantes
      </h4>
      <p class="card-text d-flex justify-content-center pt-4 pb-2">
        <span class="about-style"
          >— Les jeux vidéos, c'est l'histoire de toute une vie. Plus qu'un
          passion, ça fini par faire partie de nous, de notre vie. Alors qui de
          mieux placé pour vous parlez de ce que nous connaissons vraiment
          ?</span
        >
      </p>
      <p class="about-text">
        <span class="about-letter">L'</span>aventure commença un jour comme un
        autre sauf pour nous, évidemment. Jeunes motivés et geeks, à la
        recherche de nouveaux défis, nous décidames de monter notre propre
        start-up contre vents et marées. Ce ne fût pas de tout repos mais nous y
        sommes parvenu: nous avons pu concrétiser notre rêve de toujours.
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
        😉
      </p>
    </div>

    <img class="img-footer" src="../assets/gta.jpg" />
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
