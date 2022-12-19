<template>
  <registerView
      :valid="valid"
      :acceptTerms="acceptTerms"
      :displayNameModel="displayNameModel"
      :displayNameRules="displayNameRules"
      :emailModel="emailModel"
      :emailRules="emailRules"
      :passwordModel="passwordModel"
      :passwordRules="passwordRules"
      @displayNameChanged="updateDisplayNameModel"
      @emailChanged="updateEmailModel"
      @passwordChanged="updatePasswordModel"
      @acceptTermsChanged="updateAccept"
      @validChanged="updateValid"
      @submitForm="submit"
  />
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {useUserStore} from "@/stores/UserStore";
import registerView from "@/components/views/registerView";

export default {
  components: {registerView},
  data() {
    return {
      userStore: useUserStore(),
      valid: true,
      acceptTerms: true,
      displayNameModel: "",
      displayNameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailModel: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordModel: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length > 6) || "Password must be longer than 6 characters",
      ],
    };
  },
  methods: {
    async submit() {
      if (this.valid) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.emailModel, this.passwordModel)
            .then(() => {
              this.userStore.username = this.displayNameModel;
              this.$router.push({name: "login"});
            })
            .catch((error) => {
              console.log(error);
            });
      }
    },
    updateDisplayNameModel(displayName) {
      this.displayNameModel = displayName;
    },
    updateEmailModel(email) {
      this.emailModel = email;
    },
    updatePasswordModel(password) {
      this.passwordModel = password;
    },
    updateAccept(accept) {
      this.acceptTerms = accept
    },
    updateValid(valid) {
      this.valid = valid;
    }
  },
};
</script>



