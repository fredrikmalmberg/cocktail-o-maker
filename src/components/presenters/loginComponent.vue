<template>
  <v-container fill-height @keydown.enter.prevent="loginClicked()">
    <v-row no-gutters>
      <v-col cols="12" class="title mb-5 text-center">
        Login
      </v-col>
      <v-col cols="12">
        <v-text-field
            label="Email"
            placeholder="Email"
            outlined hide-details
            class="mb-2"
            v-model="emailModel"

        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
            label="Password"
            placeholder="Password"
            outlined hide-details
            class="mb-5"
            type="password"
            v-model="passwordModel"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn block large depressed color="orange darken--2" dark @click="loginClicked()">Login</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script src="./loginComponent.js"></script>


<style scoped>

</style>