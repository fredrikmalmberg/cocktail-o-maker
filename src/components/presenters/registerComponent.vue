<template>
  <v-container fill-height @keydown.enter.prevent="registerClicked()">
    <v-row no-gutters>
      <v-col cols="12" class="title mb-5 text-center"> Register</v-col>
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
            outlined
            hide-details
            class="mb-2"
            v-model="emailModel"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
            label="Password"
            placeholder="Password"
            outlined
            hide-details
            class="mb-5"
            type="password"
            v-model="passwordModel"
        ></v-text-field>
      </v-col>


      <v-col cols="12">
        <input
            type="checkbox"
            v-model="acceptTerms"
        >
        I hereby confirm that I am over 18 years old
        <br>
        <v-btn
            block
            large
            depressed
            color="orange darken--2"
            dark
            v-if="acceptTerms"
            @click="registerClicked()"
        >
          Register
        </v-btn>
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
} from "firebase/auth";
import {useUserStore} from '../../stores/UserStore';

export default {
  data() {
    return {
      emailModel: "",
      passwordModel: "",
      displayNameModel: "",
      acceptTerms: false,
      userStore: useUserStore()
    };
  },
  methods: {
    /* eslint-disable */
    registerClicked() {
      const auth = getAuth();
      if (this.acceptTerms) {
        createUserWithEmailAndPassword(auth, this.emailModel, this.passwordModel)
            .then(() => {
              this.userStore.username = this.displayNameModel
              this.$router.push({name: "userHome"});
            })
            .catch((error) => {
              console.log(error);
            });
      } else {
        alert("Unfortunately you cannot become a member if you're not over 18.")
      }
    },
  },
};
</script>

<style scoped></style>
