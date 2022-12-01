

<!-- This file contains the TopBar-component of page.-->


<template>
    <v-app-bar
      color=#ffffff
      dark
    >
    <a href="/">
    <img class="mr-3" :src="require('/src/assets/logo.png')" height="40"/></a>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({     
    }),
  }
</script>

<style scoped>
  img{
    margin-left: 5%;
  }
  </style>