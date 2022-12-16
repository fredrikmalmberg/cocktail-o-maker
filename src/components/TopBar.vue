<!-- This file contains the TopBar-component of page. -->

<template>
  <v-app-bar color="#ffffff" dark>
    <router-link v-if="!isLoggedIn" to="/">
      <img class="mr-3" :src="require('/src/assets/logo.png')" height="40"
    /></router-link>
    <router-link v-else to="/research">
      <img class="mr-3" :src="require('/src/assets/logo.png')" height="40"
    /></router-link>
    <v-spacer></v-spacer>
    <router-link to="/user/">
    <v-btn v-if="isLoggedIn"
      class="mx-4 white--text"
      elevation="2"
      x-large
      rounded
      :disabled="!isLoggedIn"
      color="deep-purple darken-1"
    >
      User Home
    </v-btn></router-link>
    <router-link to="/login">
    <v-btn v-if="!isLoggedIn"
      class="mx-4 white--text"
      elevation="2"
      x-large
      rounded
      color="deep-purple darken-1"
      :disabled="isLoggedIn"
      >Log in</v-btn
    ></router-link>
    <router-link to="/register">
    <v-btn v-if="!isLoggedIn"
      class="mx-4 white--text"
      elevation="2"
      x-large
      rounded
      color="deep-purple darken-1"
      :disabled="isLoggedIn"
      >Register</v-btn></router-link>
    <router-link to="/logout">
    <v-btn v-if="isLoggedIn"
      class="mx-4 white--text"
      elevation="2"
      x-large
      rounded
      color="deep-purple darken-1"
      @click="logoutClicked()"
      :disabled="!isLoggedIn"
      >Log Out</v-btn> </router-link>
  </v-app-bar>
</template>

<script>
import { signOut, getAuth } from "firebase/auth";
import { useUserStore } from "@/stores/UserStore";
export default {
  props: ["user"],
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  methods: {
    logoutClicked() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          //console.log("user logged out");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
      }
    },
    
  
  computed: {
    isLoggedIn() {
      return this.userStore.loggedin
    }
  }
};
</script>

<style scoped>
img {
  padding-top: 15px;
  margin-right: 100%;
}
</style>
