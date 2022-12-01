<template>
  <v-app>
    <v-main>
      <TopBar/>
      <FilterForm/>
    </v-main>
  </v-app>
</template>

<script>
import FilterForm from './components/FilterForm.vue'
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',

  components: {
    TopBar,
    FilterForm,
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
