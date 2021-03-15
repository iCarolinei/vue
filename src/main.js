import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faMapMarkerAlt, faUserAlt, faSearch, faCopyright } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faShoppingCart)
library.add(faMapMarkerAlt)
library.add(faUserAlt)
library.add(faSearch)
library.add(faCopyright)
library.add(faTwitterSquare)
library.add(faFacebookSquare)
library.add(faInstagramSquare)
library.add(faCcVisa)
library.add(faCcMastercard)
library.add(faCcAmex)



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
