<template>
  <v-container fill-height @keydown.enter.prevent="submit()">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-form
          ref="form"
          v-bind:valid="valid"
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
        <div class="text-center mt-4">
          <v-btn
              variant="text"
              @click="$router.push({name: 'register'})"
              class="non-text-transform"
          >
            Register an account
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
    loginError: {
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
    submit: {
      required: true,
    },
  },
}
</script>

<style scoped>
</style>





