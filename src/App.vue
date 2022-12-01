<template>
  <v-app>
    <v-main>
      <TopBar/>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',

  components: {
    TopBar,
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
