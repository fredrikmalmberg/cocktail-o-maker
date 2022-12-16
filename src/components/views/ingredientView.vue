<template>
  <v-col class="mt-2" cols="12">
    <h2>My Ingredients</h2>
  </v-col>
  <span v-for="i in ingredientList" v-bind:key="i">
    <ingredientThumbPresenter :ingredient="i['id']" />
  </span>
  <router-link to="/ingredients" style="text-decoration: none; color: inherit">
    <v-btn class="mx-2" fab dark rounded color="indigo">
      <v-icon dark> mdi-plus </v-icon> Add Ingredients
    </v-btn>
  </router-link>
</template>

<script>
import ingredientThumbPresenter from "../presenters/ingredientThumbPresenter.vue";
export default {
  
  components: {
    ingredientThumbPresenter,
  },
  props: {
    ingredientList: { required: true },
  },
};
</script>

<style scoped></style>
