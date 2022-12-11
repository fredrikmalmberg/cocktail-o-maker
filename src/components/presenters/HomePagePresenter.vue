<!-- This file contains the HomePage. Currently contains two buttons.-->
<template>
  <div class="auth-page">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>
        Email:
        <input type="email" v-model="email"/>
      </label>
      <label>
        Password:
        <input type="password" v-model="password"/>
      </label>
      <v-button type="submit">Login</v-button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>


    <h1>Sign up</h1>
    <v-form @submit.prevent="signup">
<!--      <label>
        Name:
        <input type="text" v-model="name"/>
      </label>-->
      <label>
        Email:
        <input type="email" v-model="email"/>
      </label>
      <label>
        Password:
        <input type="password" v-model="password"/>
      </label>
      <v-button type="submit">Sign up</v-button>
      <p v-if="error" class="error">{{ error }}</p>
    </v-form>
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
} from 'firebase/auth'
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      try {
        await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });
        // Handle successful login
      } catch (error) {
        this.error = 'Failed to login: ' + error.response.data.message;
      }
    },
    async signup() {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, this.email, this.password)
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
.auth-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 0;
}

.auth-page h1 {
  margin-bottom: 30px;
}

.auth-page form {
  width: 50%;
}

.auth-page label {
  display: block;
  margin-bottom: 10px;
}

.auth-page input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.auth-page button {
  padding: 10px 20px;
  border: none;
  background: #333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.auth-page .error {
  color: red;
}
</style>
