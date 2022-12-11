<!-- This file contains the HomePage. Currently contains two buttons.-->
<template>
  <div class="home-page">
    <h1>Welcome to Cocktail-o-Maker!</h1>
    <p>
      <br />Here at Cocktail-o-Maker we present you with unique drink recipies.
      <br />Since the drinks contain alcohol we only let adults use the recipies.
      <br /><br />
      Please log in or register to be a part of our cocktail-o-makers!
    </p>

    <div class="login-button">
      <v-btn><router-link to="/login">Log in</router-link></v-btn
      ><v-btn style="margin-left: 5%"><router-link to="/register">Register</router-link></v-btn>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  //signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  //updateProfile,
  //onAuthStateChanged,
  //signOut,
} from "firebase/auth";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
      try {
        await axios.post("/api/login", {
          email: this.email,
          password: this.password,
        });
        // Handle successful login
      } catch (error) {
        this.error = "Failed to login: " + error.response.data.message;
      }
    },
    async signup() {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, this.email, this.password);
      //   try {
      //     await axios.post('/api/signup', {
      //       name: this.name,
      //       email: this.email,
      //       password: this.password,
      //     });
      //     // Automatically log the user in with their new account
      //     this.login();
      //   } catch (error) {
      //     this.error = 'Failed to sign up: ' + error.response.data.message;
      //   }
    },
  },
};
</script>

<style>
.home-page {
  font-family: sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 0;
  color: #333;
  text-align: center;
  padding-top: 3%;
}
.login-button {
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 10px;
}
</style>
