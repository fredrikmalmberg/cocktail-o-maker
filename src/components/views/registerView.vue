<template>
  <v-container fill-height @keydown.enter.prevent="submitForm">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-form @update:modelValue="changeValid"
              lazy-validation>
        <v-text-field
            @update:model-value="updateDisplayName"
            :counter="10"
            :rules="displayNameRules"
            label="Name"
            class="mb-2"
            required
        ></v-text-field>

        <v-text-field
            @update:model-value="updateEmail"
            :rules="emailRules"
            label="E-mail"
            required
            class="mb-2"
        ></v-text-field>

        <v-text-field
            @update:model-value="updatePassword"
            :rules="passwordRules"
            label="password"
            type="password"
            required
            class="mb-2"
        ></v-text-field>

        <v-checkbox
            :model-value="acceptTerms"
            @input="updateClicked"
            :rules="[
            v => !!v ||
              'Unfortunately you cannot become a member if you`re not over 18'
          ]"
            label="I hereby confirm that I am over 18 years old"
            required
        ></v-checkbox>

        <v-btn
            color="orange"
            class="mt-7"
            @click="submitForm"
            variant="flat"
            block
        >
          Register
        </v-btn>
        <div class="text-center mt-4">
          <v-btn
              variant="text"
              @click="$router.push({name: 'login'})"
              class="non-text-transform"
          >
            Already got an account? Log in here
          </v-btn>
        </div>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  props: {
    valid: {
      required: true,
    },
    response: {
      required: false,
    },
    emailModel: {
      required: true,
    },
    emailRules: {
      required: true,
    },
    passwordModel: {
      required: true,
    },
    passwordRules: {
      required: true,
    },
    displayNameModel: {
      required: true,
    },
    displayNameRules: {
      required: true,
    },
    acceptTerms: {
      required: true
    }

  },
  methods: {
    updateDisplayName(displayName) {
      this.$emit("displayNameChanged", displayName);
    },
    updateEmail(email) {
      this.$emit("emailChanged", email);
    },
    updatePassword(password) {
      this.$emit("passwordChanged", password);
    },
    updateClicked(event) {
      this.$emit("acceptTermsChanged", event.target.checked);
    },
    submitForm() {
      this.$emit("submitForm");
    },
    changeValid(valid) {
      this.$emit("validChanged", valid)
    }
  },
};
</script>

<style scoped>
.v-input__details {
  text-align: left;
  padding-left: 15px;
}</style>