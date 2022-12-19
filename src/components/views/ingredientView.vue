<template>
  <v-row class="ingredientSection">
  <v-col class="mt-2" cols="12">
    <h2>My Ingredients</h2>
  </v-col>
  <span v-for="i in ingredientList" v-bind:key="i">
    <ingredientThumbPresenter :ingredient="i['id']" />
  </span>
    
  <v-btn v-if="ingredientList[0]" class="mx-2" fab dark rounded color="indigo" @click.stop="$emit('addIngredientClicked')">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <v-btn v-else class="mx-2" fab dark rounded color="red" @click.stop="$emit('addIngredientClicked')">
      <v-icon dark> mdi-plus </v-icon> Add Ingredients
    </v-btn>
  </v-row>
</template>

<script>
import ingredientThumbPresenter from "../presenters/ingredientThumbPresenter.vue";
export default {
  emits:['addIngredientClicked'],
  components: {
    ingredientThumbPresenter,
  },
  props: {
    ingredientList: { required: true },
  },
};
</script>

<style scoped>
.ingredientSection{
  background-color: white;
  border-radius: 5px;
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  padding-bottom: 15px;
  display: block;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

}
</style>
