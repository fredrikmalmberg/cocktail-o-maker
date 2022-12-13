<!-- This file contains the TopBar-component of page. -->

<template>
  <v-app-bar color="#ffffff" dark>
    <a href="/">
      <img class="mr-3" :src="require('/src/assets/logo.png')" height="40"
    /></a>
    <v-spacer></v-spacer>
    <v-btn
      class="mx-4 white--text"
      elevation="2"
      x-large
      rounded
      color="deep-purple darken-1"
    >
      <router-link to="/user/hugo">User Home</router-link>
    </v-btn>
    <v-btn
      class="mx-4 white--text"
      elevation="2"
      x-large
      rounded
      color="deep-purple darken-1"
      :disabled="isLoggedIn()"
      ><router-link to="/login">Log in</router-link></v-btn
    >
    <v-btn
      class="mx-4 white--text"
      elevation="2"
      x-large
      rounded
      color="deep-purple darken-1"
      @click="logoutClicked()"
      :disabled="!isLoggedIn()"
      ><router-link to="/logout">Log Out</router-link></v-btn
    >
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
          console.log("user logged out");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    },
    isLoggedIn() {
      if (this.userStore.currentUser) {
        return true;
      }
    },
  },
};
</script>

<style scoped>
img {
  padding-top: 15px;
  margin-right: 100%;
}
</style>
