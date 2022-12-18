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
import loginPresenter from "@/components/presenters/loginPresenter";
export default {

  // eslint-disable-next-line vue/no-unused-components
  components:{ loginPresenter

  },
  props: {
    loginError: {required: true},
    ingredientList: {required: true}
  }
}
</script>

<style scoped>

</style>