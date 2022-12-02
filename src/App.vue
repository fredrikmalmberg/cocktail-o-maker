<template>
  <v-app>
    <v-main>
      <TopBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'
//import HomePage from './components/HomePage.vue'

export default {
  name: 'App',

  components: {
    TopBar,
    //HomePage,
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  data: () => ({
    //
  }),
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

