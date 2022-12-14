<template>
    <ingredientThumb v-if="resultPromiseState.data" 
    :name="nameString()" 
    :hasIngredient="hasIngredient()" 
    @addIngredient="addIngredientACB"
    @removeIngredient="removeIngredientACB"/>
    <div v-else>Loading</div>  
</template>

<script>
import ingredientThumb from '../views/ingredientThumb.vue';
import {useUserStore} from '../../stores/UserStore';
import {getIngredientDetails} from '../../cocktailDBIntegration';

export default {
  components: {
    ingredientThumb,
  },
  props: {
    ingredient: {required: true}
  },
  mounted() {
    this.resultPromiseState = getIngredientDetails(this.ingredient);
  },
  data() {
    return { resultPromiseState: { data: null, error: null} };
  },
  setup() {
    const userStore = useUserStore();
    return {
        userStore, 
      };
  },
  methods: {
    nameString() {
        return this.resultPromiseState.data.ingredients[0].strIngredient;
    },
    removeIngredientACB(){
      let name = this.nameString();
      console.log("should remove", name)
      if (confirm('Are you sure you want to remove ' + name + " from your ingredients?")){
        this.userStore.removeIngredient(this.ingredient);
      }
      
    },
    addIngredientACB(){
      let name = this.nameString();
      console.log("should add", name)
      this.userStore.addIngredient(this.ingredient);
      
      
    },
    hasIngredient(){
      return (this.userStore.ingredients.indexOf(this.ingredient) !== -1)
    }
  },
}
</script>



