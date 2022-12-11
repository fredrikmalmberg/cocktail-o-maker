<!-- This file contains the TopBar-component of page. 
    This page currently has a button that is empty, TODO when navigation is added -->


<template>
  <v-app-bar
      color=#ffffff
      dark
  >
    <a href="/">
      <img class="mr-3" :src="require('/src/assets/logo.png')" height="40"/></a>
    <v-spacer></v-spacer>
    <v-btn>
      <router-link to="/user/hugo">User Home</router-link>
    </v-btn>
    <v-btn>Log in</v-btn>
    <v-btn color="error" @click="logoutClicked()">Log out</v-btn>
  </v-app-bar>
</template>

<script>
import { signOut, getAuth} from 'firebase/auth'
export default {
  props: ['user'],
  data: () => ({}),
  methods: {
    logoutClicked(){
      const auth = getAuth()
      signOut(auth).then(() => {
        console.log("user logged out")
      }).catch((error) => {
        console.log('error: ', error)
      })
    }
  }
}
</script>

<style scoped>
img {
  padding-top: 15px;
  margin-right: 100%;
}
</style>