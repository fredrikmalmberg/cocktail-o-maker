<template>
    <ingredientThumb v-if="resultPromiseState.data" 
    :name="nameString()" 
    :hasIngredient="hasIngredient()" 
    @addIngredient="addIngredientACB"
    @removeIngredient="removeIngredientACB"/>
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
    this.allIngredients = this.userStore.ingredients;
  },
  data() {
    return { 
      allIngredients: [],
      resultPromiseState: { data: null, error: null} };
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
      if (confirm('Are you sure you want to remove ' + name + " from your ingredients?")){
        this.userStore.removeIngredient(this.ingredient);
      }
    },
    addIngredientACB(){
      this.userStore.addIngredient(this.ingredient);
    },
    hasIngredient(){
      return (this.allIngredients.some(e => e.id === this.ingredient)) 
    }
  },
}
</script>



