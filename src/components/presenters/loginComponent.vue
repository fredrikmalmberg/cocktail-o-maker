<template>
  <v-container fill-height @keydown.enter.prevent="submit()">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >

        <v-text-field
            v-model="emailModel"
            :rules="emailRules"
            label="E-mail"
            required
            class="mb-2"
        ></v-text-field>

        <v-text-field
            v-model="passwordModel"
            :rules="passwordRules"
            label="password"
            type="password"
            required
            class="mb-2"
        ></v-text-field>


        <v-btn
            color="orange"
            class="mt-7"
            @click="submit"
            variant="flat"
            block
        >
          Log in
        </v-btn>
        <div v-if="loginError" class="mt-3 text-red">
          {{ loginError }}
        </div>
      </v-form>
    </v-responsive>
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
//import { ref, set } from "firebase/database";
import {useUserStore} from '../../stores/UserStore';

export default {
  data() {
    return {
      valid: true,
      loginError: "",
      emailModel: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordModel: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length > 6) || 'password must be longer than 6 characters',
      ],

      userStore: useUserStore()
    }
  },
  methods: {
    async submit() {
      const {valid} = await this.$refs.form.validate()
      if (valid) {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, this.emailModel, this.passwordModel)
            .then(response => {
              /* eslint-disable */
              console.log(response)
              //this.userStore.setCurrentUser(response);
              this.$router.push({name: 'userHome'});
            }).catch(error => {
          this.loginError = "User not found"
          console.log(error)
        })

      }

    },

  }
}
</script>

<style scoped>

</style>