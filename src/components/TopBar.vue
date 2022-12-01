

<!-- This file contains the TopBar-component of page. 
    This page currently has a button that is empty, TODO when navigation is added -->


<template>
    <v-app-bar
      color=#ffffff
      dark
    >
    <a href="/">
    <img class="mr-3" :src="require('/src/assets/logo.png')" height="30" /></a>
        <v-spacer></v-spacer>
        <v-btn>Test.btn</v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({     
    }),
  }
</script>

<style scoped>
.v-btn{
margin-right: 2%;
}
  img{
    margin-right: 100%;
  }
  </style>