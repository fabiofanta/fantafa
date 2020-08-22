import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authenticated: false,
  },
  mutations: {
      setAuthentication(state,status) {
          state.authenticated = status;
      }
  }
});

export default store
