<!-- This file contains the TopBar-component of page. -->


<template>
    <v-app-bar
      color=#ffffff
      dark
    >
    <a href="/">
    <img class="mr-3" :src="require('/src/assets/logo.png')" height="40" /></a>
        <v-spacer></v-spacer>
        <v-btn><router-link to="/user/hugo">User Home</router-link></v-btn>
        <v-btn>Log in</v-btn>
    </v-app-bar>
</template>

<script>

  export default {
    props: ['user'],
    data: () => ({     
    }),
  }
</script>

<style scoped>
img{
    padding-top: 15px;
    margin-right: 100%;
  }
  </style>