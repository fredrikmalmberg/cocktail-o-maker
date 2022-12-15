<template>
  <v-container fill-height @keydown.enter.prevent="registerClicked()">
    <v-row no-gutters>
      <v-col cols="12" class="title mb-5 text-center"> Register</v-col>
      <form>
      <v-col cols="12">
        <v-text-field
            label="Display name"
            placeholder="Display name"
            outlined
            hide-details
            class="mb-2"
            v-model="displayNameModel"
            @blur="v$.displayNameModel.$touch"
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
    </form>
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
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'


export default {
  setup () {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      form: {
        firstName: { 
          required: {
            $validator: this.validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          } 
        },
        lastName: { 
          required: {
            $validator: this.validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          } 
        },
        email: { required, email },
        password: { required, min: minLength(6) },
        confirmPassword: { required }
      },
    }
  },
    
  data() {
    return {
      form: {
        displayNameModel: "",
        emailModel: "",
        passwordModel: "",
      },
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
  validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
}

  },

};
</script>

<style scoped></style>
