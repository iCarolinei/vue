import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let registerData = { name: null, lastname: null, username: null, email: null, password: null };

/*const store =*/ new Vuex.Store({
  state: {
    register: registerData
  },
  mutations: {
    updateRegisterName(state, name) {
      state.register.name = name;
    },
    updateRegisterLastName(state, lastname) {
      state.register.lastname = lastname;
    },
    updateRegisterUsername(state, username) {
      state.register.username = username;
    },
    updateRegisterEmail(state, email) {
      state.register.email = email;
    },
    updateRegisterPassword(state, password) {
      state.register.password = password;
    }
  }
});
/*export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});*/
