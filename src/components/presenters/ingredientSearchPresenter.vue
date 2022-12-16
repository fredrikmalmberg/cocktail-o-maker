<template>
    <ingredientThumb v-if="resultPromiseState.data"
    :name="ingredientName" 
    :hasIngredient="hasIngredient()" 
    @addIngredient="addIngredientACB"
    @removeIngredient="removeIngredientACB">
    test</ingredientThumb>

    <div v-else>Loading</div> 
    
    </template>
    
    <script>
    import {searchIngredientByName} from '../../cocktailDBIntegration';
    import {useUserStore} from '../../stores/UserStore';
    import ingredientThumb from '../views/ingredientThumb.vue';
    export default {
      components: {
        ingredientThumb,
      },
        props: {
            ingredientName: {required: true},
        },
        mounted() {
        this.resultPromiseState = searchIngredientByName(this.ingredientName);
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
        ingredientID() {
            return parseInt(this.resultPromiseState.data.ingredients[0].idIngredient);
        },
        removeIngredientACB(){
          let id = this.ingredientID();
          //console.log("should remove", this.ingredientName)
          if (confirm('Are you sure you want to remove ' + this.ingredientName + " from your ingredients?")){
            this.userStore.removeIngredient(id);
          }
        },
        addIngredientACB(){
          let id = this.ingredientID();
          //console.log("should add", this.ingredientName, id)
          this.userStore.addIngredient(id, this.ingredientName);
          
        },
        hasIngredient(){
          let id = this.ingredientID();
          let hasIng = false
          function hasID(inventoryDict) {
            if (id === inventoryDict['id']){
              hasIng = true
            }
          }
          this.userStore.ingredients.forEach(hasID)
          return hasIng
        }
      }
    
    }
    </script>