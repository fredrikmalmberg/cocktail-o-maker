import { defineStore } from "pinia";

// OBS: Right now with an example of how it can look

// defineStore will return a function
// in state we define all properties
// getters are functions that give us the info we want, in the way we want

export const useUserStore = defineStore("userStore", {
  state: () => ({
    currentUser: null,
    login: false,
    username: "hugo",
    underTwenty: true,
    favourites: [11410, 11417],
    ingredients: [1, 2, 552],
  }),
  actions: {
    confirmedUnderTwenty() {
      this.underTwenty = false;
    },
    setCurrentUser(user) {
      this.currentUser = user;
      console.log(this.currentUser);
    },

    addFavourite(drinkID){
            if (this.favourites.find(function(id){
                return id === drinkID;
              })){
                console.log("Drink already in favourites")}
                else{       
              this.favourites = [drinkID, ...this.favourites];
            }
    },
    removeFavourite(drinkID) {
      drinkID = parseInt(drinkID);
      console.log(drinkID);
      this.favourites = [
        ...this.favourites.filter(function (id) {
          return id !== drinkID;
        }),
      ];
    },

    isFavourite(drinkID) {
      return this.favourites.indexOf(drinkID) !== -1;
    },

    addIngredient(ingredientID){

      ingredientID = parseInt(ingredientID);

      
        if (this.ingredients.find(function(id){
            return id === ingredientID;
          })){
            console.log("Ingredient already in list")
          }
        else{this.ingredients = [ingredientID, ...this.ingredients];}
    },
        
    removeIngredient(ingredientID) {
      this.ingredients = [
        ...this.ingredients.filter(function (id) {
          return id !== ingredientID;
        }),
      ];
    },
  },
  //getters: {
  //getCurrentUserID() {
  // if (this.currentUser) {
  //  return this.currentUser.uid;
  //}
  //},
  //},
});
