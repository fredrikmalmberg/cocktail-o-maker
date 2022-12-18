<template>
  <loginView v-if="showRecommendations" :ingredientList="ingredientList" :recommendationList="recommendationList()"></loginView>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {useUserStore} from '@/stores/UserStore';
import loginView from "@/components/views/loginView";

export default {
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
              /* eslint-disable */
              this.response = response
              this.$router.push({name: 'userHome'});
            }).catch(error => {
          this.loginError = "User not found"
        })

      }

    },

  }
}
</script>

