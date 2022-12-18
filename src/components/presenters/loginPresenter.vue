<template>
  <loginView
      v-bind:valid="valid"
      v-bind:response="response"
      v-bind:loginError="loginError"
      v-bind:emailModel="emailModel"
      v-bind:emailRules="emailRules"
      v-bind:passwordModel="passwordModel"
      v-bind:passwordRules="passwordRules"
      v-bind:submit="submit"
  />
</template>


<script>
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {useUserStore} from '@/stores/UserStore';
import loginView from "@/components/views/loginView";

export default {
  components: {loginView},
  data() {
    return {
      valid: true,
      response: "",
      loginError: "",
      emailModel: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordModel: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length > 6) || 'Password must be longer than 6 characters',
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
              this.response = response
              this.$router.push({name: 'userHome'});
            }).catch(error => {
          console.log(error)
          this.loginError = "User not found"
        })
      }
    },
  }
}


</script>




