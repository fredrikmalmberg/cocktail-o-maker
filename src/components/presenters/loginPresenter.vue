<template>
  <loginView
      :valid="valid"
      :response="response"
      :loginError="loginError"
      :emailModel="emailModel"
      :emailRules="emailRules"
      :passwordModel="passwordModel"
      :passwordRules="passwordRules"
      @emailChanged="updateEmailModel"
      @passwordChanged="updatePasswordModel"
      @submitForm="submit"
      @validChanged="updateValid"
  />
</template>


<script>
import {useUserStore} from '@/stores/UserStore';
import loginView from "@/components/views/loginView";
import {signIn} from "@/firebaseModel";

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
      if (this.valid) {
        signIn(this.emailModel, this.passwordModel).then((response) => {
          this.response = response;
          this.$router.push({ name: "userHome" });
        })
            .catch((error) => {
              console.log(error);
              this.loginError = "User not found";
            });

      }
    },
    updateEmailModel(email) {
      this.emailModel = email;
    },
    updatePasswordModel(password) {
      this.passwordModel = password;
    },
    updateValid(valid){
      this.valid=valid;
    }

  },
}


</script>




