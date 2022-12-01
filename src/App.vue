<template>
  <TopBar/>
  <HelloWorld msg="Welcome to Coctail-o-Maker"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TopBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
