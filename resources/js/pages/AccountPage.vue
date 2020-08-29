<template>
  <div>
    <h1>My Dashboard</h1>
    <p>Hello {{ user.name }}</p>
    <button @click="logout" type="button" name="button">Logout</button>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {

  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('retriveData');
  },

  methods: {
     logout () {
        this.$store.dispatch('logout');
        this.$router.push({ path: '/login'});
     }
  },
  computed: {
      ...mapState ([
          'user'
      ])
  }

};
</script>
