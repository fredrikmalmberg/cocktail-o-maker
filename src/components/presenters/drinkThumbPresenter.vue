<template>
    <div v-if="!resultPromiseState.data">
      Loading...
    </div>
    <drinkThumb 
    v-else 
    :imgUrl="imgUrl()" 
    :name="nameStr()" 
    :ingredientsInInventory="ingredientsInInventory()"
    :totalIngredients="totalIngredients()"
    @drinkClicked="drinkClickedACB" 
    :isFavourite="isFavourite(favouriteInt)" 
    @removeFavourite="removeDrinkACB"
    @addFavourite="addDrinkACB"/>
</template>

<script>
import drinkThumb from '../views/drinkThumb.vue'
import {useUserStore} from '../../stores/UserStore';
import {getDrinkDetails} from '../../cocktailDBIntegration';
import { mapActions} from "pinia";

export default {
  components: {
    drinkThumb,
  },
  props: {
    favourite: {required: true},
    ingredientList: {required: false, default : []}
  },
  mounted() {
    this.resultPromiseState = getDrinkDetails(this.favourite);
    this.ingredientsInInventory();
    this.favouriteInt = parseInt(this.favourite);
  },
  data() {
    return { 
      name : "",

      resultPromiseState: { data: null, error: null} ,
      ingredientResultPromiseState: { data: null, error: null} }
  },
  methods: {
    ...mapActions(useUserStore, ["removeFavourite"]),
    ...mapActions(useUserStore, ["addFavourite"]),
    ...mapActions(useUserStore, ["isFavourite"]),

    drinkClickedACB() {
      this.$router.push({
        name: 'drinkDetails',
        params: {id: this.favourite},
      })
    },
    removeDrinkACB(){
      let name = this.nameStr();
      //console.log("should remove", name)
      if (confirm('Are you sure you want to remove ' + name + " from your favourites?")){
        this.removeFavourite(this.favourite)
      }
    },
    addDrinkACB(){
      //let name = this.nameStr();
      //console.log("should add", name)
      this.addFavourite(this.favourite)
    },
    imgUrl(){
      return this.resultPromiseState.data.drinks[0].strDrinkThumb
    },
    nameStr(){
      return this.resultPromiseState.data.drinks[0].strDrink
    },
    ingredientsForDrink(){
      var arr = []
      if (this.resultPromiseState.data){
        for (let i = 1; i < 16; i++) {
          let ingredientToAdd = this.resultPromiseState.data.drinks[0]["strIngredient"+i]
          if (ingredientToAdd){
            arr = [...arr, ingredientToAdd]
          }
        }
      }
      return arr;
    },
    totalIngredients(){
      return this.ingredientsForDrink().length;
    },
    ingredientsInInventory(){
      let matchingIngredients = 0;
      let ingredientsNeeded = this.ingredientsForDrink();
      let ingredientsOfUser = this.ingredientList;
      let name2 = ""
      function matchName(name1){
          return (name1==name2);
        }
      for (var i =0; i<ingredientsOfUser.length; i++){
        name2=ingredientsOfUser[i]['name'];
        if (ingredientsNeeded.find(matchName)){
          matchingIngredients += 1;
        }
      }
      return matchingIngredients
    },
  },
}
</script>



