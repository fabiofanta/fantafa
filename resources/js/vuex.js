import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      user: ''
  },
  mutations: {
      setPost(state,user) {
          this.state.user = user;
      }

  },
  actions: {
      retriveData({commit}) {
          axios.get('api/test')
          .then(response => {
              commit('setPost',response.data.user);

          })
      },
      logout() {
          axios.post('api/logout')
          .then(response => {
              return response;


          })
      }
  }
});

export default store
