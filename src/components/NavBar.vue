<template>
<div>
    <div id="nav">
      <router-link to="/" class="navbar-brand">All Galleries</router-link> 
      <router-link to="/my-galleries" class="navbar-brand" v-if="isUserAuthenticated">My Galleries</router-link>
      <router-link to="/create" class="navbar-brand" v-if="isUserAuthenticated">Create new Gallery</router-link>
      <router-link to="/login" class="navbar-brand login" v-if="!isUserAuthenticated"> Login</router-link>
      <router-link to="/register" class="navbar-brand" v-if="!isUserAuthenticated">Register</router-link>
      <button v-if="isUserAuthenticated" @click="onLogout" type="button" class="btn btn-dark btn-sm">Log out</button>
    </div>

</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'


export default {
    name: 'NavBar',
    
    components: {
   
  },

    computed: {
      ...mapGetters({
        isUserAuthenticated: "auth/isUserAuthenticated",
        galleries: "galleries"
      }),
  },

  methods: {
       ...mapActions({
          logout: "auth/logout"
        }),

      onLogout() {
            this.logout();
            this.$router.push({
              name:"login"
            });
          }
    }
}
</script>

<style scoped>

</style>