<template>
  <v-container fill-height>
    <v-row no-gutters>
      <v-col cols="12" class="title mb-5 text-center">
        Register
      </v-col>
      <v-col cols="12">
        <v-text-field
            label="Display name"
            placeholder="Display name"
            outlined
            hide-details
            class="mb-2"
            v-model="displayNameModel"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
            label="Email"
            placeholder="Email"
            outlined hide-details
            class="mb-2"
            v-model="emailModel"

        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
            label="Password"
            placeholder="Password"
            outlined hide-details
            class="mb-5"
            type="password"
            v-model="passwordModel"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn block large depressed color="orange darken--2" dark @click="registerClicked()">Register</v-btn>
      </v-col>
    </v-row>
  </v-container>
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

export default {
  data() {
    return {
      emailModel: '',
      passwordModel: '',
      displayNameModel: ''
    }
  },
  methods: {
    registerClicked() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.emailModel, this.passwordModel)
          .then(() => {
            this.$router.push({name: 'login'})
          }).catch(error => {
        console.log(error)
      })
      //   this.register({email: this.emailModel, password: this.passwordModel, displayName: this.displayNameModel})
      //       .then(() => {
      //         this.$router.push({ name: 'Login' })
      //       }).catch(error => {
      //         console.log(error)
      //       })
    },

  }
}
</script>

<style scoped>

</style>