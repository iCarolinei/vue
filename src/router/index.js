import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue";
import Spooknick from "../views/Spooknick.vue";
import Faq from "../views/Faq.vue";
import Delivery from "../views/Delivery.vue";
import Contact from "../views/Contact.vue";
import Payment from "../views/Payment.vue";

import Games from "../views/Games.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/store",
    name: "Store",
    component: Store
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/spooknick",
    name: "Spooknick",
    component: Spooknick
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment
  },
  {
    path: '/games/:filterType/:filterValue',
    name: "Games",
    props: true,
    component: Games
  }

];

const router = new VueRouter({
  routes
});

export default router;
