<template>
  
  
 
  <drinkThumbPresenter 
  :favourite="this.$props.drinkData.drinks[0].idDrink"
  :ingredientList="ingredientList"
  ></drinkThumbPresenter>
  <h3>Instructions </h3>{{this.$props.instructions}}
  <h3>Ingredients </h3>
  <div v-for="item in this.$props.ingredients" v-bind:key="item">
  {{ item }}</div>
  </template>

<script>
import drinkThumbPresenter from '../presenters/drinkThumbPresenter.vue';
export default {
  props: {
    drinkData: { required: true },
    ingredients: { required: true },
    instructions: { required: true },
    name: { required: true },
  },
  components: {
    drinkThumbPresenter
  }

 

}
</script>
