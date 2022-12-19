<template>
  <v-row class="justify-space-around">
  <div class="main"> 
  <v-row class="justify-space-around">
  <drinkThumbPresenter 
  :favourite="this.$props.drinkData.drinks[0].idDrink"
  :ingredientList="ingredientList"
  ></drinkThumbPresenter>
</v-row>
  <v-row class="section">
  <h3>Instructions </h3>{{this.$props.instructions}}
</v-row>
<v-row class="section">
  <h3>Ingredients </h3>
  <div v-for="item in this.$props.ingredients" v-bind:key="item">
  {{ item[0] }} : {{ item[1] }}</div>
</v-row>

</div>
</v-row>
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
<style scoped>
.section{
  margin-top:30px;
  display: block;
}
.main{
  margin-top: 30px;
  max-width: 400px;
}
</style>
