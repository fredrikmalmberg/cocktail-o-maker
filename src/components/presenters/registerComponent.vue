<template>
  <v-container fill-height @keydown.enter.prevent="registerClicked()">
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
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          color="success"
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
      v => (v && v.length <= 10) || 'password must be less than 6 characters',
    ],
    };
  },
  methods: {
    /* eslint-disable */
    async submit() {
      const { valid } = await this.$refs.form.validate()
      if (valid) alert('Form is valid')
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
