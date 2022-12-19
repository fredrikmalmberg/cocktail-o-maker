<script>

import {getDrinkDetails} from '../../cocktailDBIntegration.js';
import {useUserStore} from '../../stores/UserStore';
import detailsView from '../views/detailsView.vue'

export default {
  components: {detailsView},
  data() {
    return {
      resultPromiseState: { data: null, error: null} ,
      userStore: useUserStore(),
    }
  },
  mounted(){
    console.log(this.$route.params.id)
    this.resultPromiseState = getDrinkDetails(parseInt(this.$route.params.id));
    console.log(this.resultPromiseState)
  },
  computed: {
    ingredientList() {
      return this.userStore.ingredients;
    },
  },
  methods: {
    nameStr(){
      return this.resultPromiseState.data.drinks[0].strDrink
    },
    instructions(){
      return this.resultPromiseState.data.drinks[0].strInstructions
    },
    ingredientsForDrink(){
      let arr = []
      for (let i = 1; i < 16; i++){
        
        if (this.resultPromiseState.data.drinks[0]['strIngredient'+i] !==null){
      arr = [...arr, [this.resultPromiseState.data.drinks[0]['strIngredient'+i], this.resultPromiseState.data.drinks[0]['strMeasure'+i]]] }
      }
      console.log(arr)
      return arr
    }
  },
  
}

</script>


<template>

      <detailsView v-if="resultPromiseState.data" 
      :name="nameStr()"  
      :instructions="instructions()"
      :ingredients="ingredientsForDrink()"
      :drinkData="resultPromiseState.data" 
      :ingredientList="ingredientList" />
</template>