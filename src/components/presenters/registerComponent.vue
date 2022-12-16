<template>
  <v-container fill-height @keydown.enter.prevent="submit()">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="displayNameModel"
          :counter="10"
          :rules="displayNameRules"
          label="Name"
          class="mb-2"
          required
        ></v-text-field>

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

        <v-checkbox

          v-model="acceptTerms"
          :rules="[v => !!v || 'You have to be over 18 to use our website!']"
          label="Are you over 18 years?"
          required
        ></v-checkbox>

        <v-btn
          color="orange"
          class="mt-7"
          @click="submit"
          variant="flat"
          block
        >
          Submit
        </v-btn>
      </v-form>
    </v-responsive>
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
      
      userStore: useUserStore(),
      valid: true,
      acceptTerms: false,
    displayNameModel: '',
    displayNameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
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
    };
  },
  methods: {
    /* eslint-disable */
    async submit() {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.emailModel, this.passwordModel)
            .then(() => {
              this.userStore.username = this.displayNameModel
              this.$router.push({name: "login"});
            })
            .catch((error) => {
              console.log(error);
            });

      }
      
      
    },
  },
};
</script>

<style scoped>
.v-input__details{
  text-align: left;
  padding-left: 15px;
}</style>
