<template>
  <v-app>
    <v-main>
      <TopBar :user="userStore"/>
      <v-container><router-view/></v-container>
      
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'
import {useUserStore} from './stores/UserStore'
//import HomePage from './components/HomePage.vue'

export default {
  name: 'App',

  components: {
    TopBar,
    //HomePage,
  },
  setup() {
    const userStore = useUserStore();
    return {userStore};
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color: #FF027C
}

nav a {
  font-weight: bold;
  color: #FF027C;
}

nav a.router-link-exact-active {
  color: #FF027C;
}
</style>

