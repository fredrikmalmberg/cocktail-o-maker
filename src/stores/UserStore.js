import {defineStore} from "pinia";

// OBS: Right now with an example of how it can look


// defineStore will return a function
// in state we define all properties
// getters are functions that give us the info we want, in the way we want


export const useUserStore = defineStore("userStore", {
    state: () => ({
       login:false,
       username:"hugo",
       underTwenty: true,
       favourites:[11410,11417],
       ingredients:[1, 2, 552],
    }),
    actions:{
        confirmedUnderTwenty() {
            this.underTwenty = false;
        },
        addFavourite(drinkID){
            if (!this.favourites.find(function(id){
                return id !== drinkID;
              })){
              this.favourites = [drinkID, ...this.favourites];
            }
            else{console.log("Dink already in favourites")}
        },
        removeFavourite(drinkID){
          drinkID = parseInt(drinkID);
          console.log(drinkID);
            this.favourites = [...this.favourites.filter(function(id){
                return id !== drinkID;
              })];
        },
        isFavourite(drinkID){
          return (this.favourites.indexOf(drinkID) !== -1)
        },
        addIngredient(ingredientID){
            if (!this.ingredients.find(function(id){
                return id !== ingredientID;
              })){
                this.ingredients = [ingredientID, ...this.ingredients];
              }
            else{console.log("Ingredient already in list")}
            
        },
        removeIngredient(ingredientID){
            this.ingredients = [...this.ingredients.filter(function(id){
                return id !== ingredientID;
              })];
        }
    }
})