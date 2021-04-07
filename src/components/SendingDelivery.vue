<template>
  <div class="card">
    <div class="card-body border-left border-right container">
      <h1 class="d-flex justify-content-center pt-1 form-title">
        Livraison/retour ❤️
      </h1>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-primary"
      >
        Tu as 14 jours pour renvoyer ton colis après livraison
      </h4>

      <div class="about-text pt-4 pb-2">
        <p>
          🚚 La loi belge sur les pratiques commerciales et sur l'information et
          la protection du consommateur du 14 juillet 1991 autorise le
          consommateur à notifier le vendeur qu'il/elle renonce à son achat dans
          les 14 jours ouvrables qui suivent la date de livraison ou de la
          conclusion du contrat.
        </p>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-primary"
      >
        Modes de livraison
      </h4>

      <div class="about-text pt-4 pb-2">
        <ul>
          <li>
            <span class="text-primary">• Chronopost 13H :</span> 11.71€
            Livraison le lendemain avant 13h, du lundi au vendredi (pas le
            samedi) en France après expédition de votre commande.
          </li>
          <li class="pt-2">
            <span class="text-primary">• Colissimo :</span> 7.80€ Livraison sous
            48H à domicile en France après expédition de votre commande.
          </li>
          <li class="pt-2">
            <span class="text-primary"> • Chrono Relais 13 :</span> 7.39€
            Livraison sous 2 jours en point relais en France après expédition de
            ta commande. Gratuit au dela de 100€ de commande Livraison en
            Europe.
          </li>
          <li class="pt-2">
            <span class="text-primary">• Colissimo International :</span>
            Livraison comprise entre 3 et 5 jours selon la zone après expédition
            de ta commande.
          </li>
        </ul>
      </div>
      <h4
        class="card-title border-bottom d-flex justify-content-center py-3 text-primary"
      >
        Retour
      </h4>

      <div class="about-text pt-4 pb-2">
        <p>
          📦 Tu peux renvoyer les articles correctement emballés et affranchis
          par poste à Rue unlucky, 52, 4000 Belgique, Belgique. Il faut joindre
          une copie de votre facture et joindre toutes les coordonnées bancaires
          nécessaires. A la réception de ton colis, une note de crédit vous sera
          établie et les articles te seront remboursés. Spooknick games
          n'effectue aucun échange.
        </p>
      </div>
    </div>

    <img class="img-footer" src="../assets/2.jpg" />
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
