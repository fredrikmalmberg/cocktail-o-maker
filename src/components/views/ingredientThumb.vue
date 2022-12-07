<script>
/* eslint-disable */

export default {
  props: {
    ingredient: {required: true},
    //drinkClickedEvent: {required: true }
  },

  methods: {

    nameString(option) {
      console.log(option);
      if (option['value']) {
        console.log(option['value']);
        return option['value'].ingredients[0].strIngredient;
      } else {
        return "Loading..";
      }

    },
    drinkClickedACB(option) {
      //console.log(option['value'].drinks[0].idDrink);
      this.$props.drinkClickedEvent(option['value'].drinks[0].idDrink);
    }
  }
}
/* eslint-disable */
</script>


<template>
  {{ nameString(ingredient) }}
</template>


<style scoped>
.searchResult {
  text-align: center;
  display: inline-block;
  width: 200px;
  vertical-align: text-top;
  margin-inline: 40px;
  overflow: auto;
}
</style>
