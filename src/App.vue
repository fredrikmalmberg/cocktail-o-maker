<template>
  <v-app>
    <v-main>
        <TopBar/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    TopBar,
    HelloWorld,
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
  margin-top: 10px;
  
  </style>