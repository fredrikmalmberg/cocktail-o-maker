
<template>
        <userView  :userName="userName"/>
        <h2>Favourites</h2>
        <div v-for="(f, index) in favourites" v-bind:key="index">
            <drinkThumb :favourite="f" :drinkClickedEvent="drinkClickedACB"/>
        </div>
        <h2>Recommended drinks based on your favourites</h2>
        <p>TBA</p>
        <h2>Recommended drinks based on your ingredients</h2>
        <p>TBA (We need payed API access for this)</p>
        <h2>My Ingredients</h2>
        <div v-for="(i, index) in ingredients" v-bind:key="index">
            <li><ingredientThumb :ingredient="i" /></li>
        </div>
        <p>TBA (Link to add ingredients..)</p>
        
</template>

<script>
import userView from '../views/userView.vue'
import drinkThumb from '../views/drinkThumb.vue'
import ingredientThumb from '../views/ingredientThumb.vue'
import { useUserStore } from '../../stores/UserStore';
import { getDrinkDetails, getIngredientDetails } from '../../cocktailDBIntegration';

function extractValues (input) {
        if (input.data){
            return input.data;
        }
        else{
            return "Loading..";
        }
    }

export default {
    components:{
        userView,
        drinkThumb,
        ingredientThumb,
    },
    methods:{
    drinkClickedACB(id){
      this.$router.push({
        name: 'drinkDetails',
        params: { id: id },
      })
    }
  },
  setup () {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {     

    return {
    userName: this.$route.params.name,
    favourites : this.userStore.favourites.map(getDrinkDetails).map(extractValues),
    ingredients : this.userStore.ingredients.map(getIngredientDetails).map(extractValues),
    }
  },
  
}
</script>

<style scoped>

</style>