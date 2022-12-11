<template>
  <v-container fill-height>
    <v-row no-gutters>
      <v-col cols="12" class="title mb-5 text-center">
        Login
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
        <v-btn block large depressed color="orange darken--2" dark @click="loginClicked()">Login</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  //createUserWithEmailAndPassword,
  //updateProfile,
  //onAuthStateChanged,
  //signOut,
} from 'firebase/auth'
import {useUserStore} from '../../stores/UserStore';

export default {
  data() {
    return {
      emailModel: '',
      passwordModel: '',
      displayNameModel: '',
      userStore: useUserStore()
    }
  },
  methods: {
    loginClicked() {
        const auth = getAuth()
       signInWithEmailAndPassword(auth, this.emailModel, this.passwordModel)
       .then(response => {
           this.userStore.setCurrentUser(response);
            this.$router.push({ name: 'main page' })
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