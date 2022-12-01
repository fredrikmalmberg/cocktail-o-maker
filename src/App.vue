<template>
  <v-app>
    <v-main>
      <TopBar/>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',

  components: {
    TopBar,
    HomePage,
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
