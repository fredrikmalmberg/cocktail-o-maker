import { defineStore } from "pinia";

// OBS: Right now with an example of how it can look

// defineStore will return a function
// in state we define all properties
// getters are functions that give us the info we want, in the way we want

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
    currentUser: null,
    loggedin: false,
    username: "",
    underTwenty: false,
    favourites: [],
    ingredients: [],
    //username: "hugo",
    //underTwenty: true,
    //favourites: [11410, 11417],
    //ingredients: [{'id':1, 'name': "vodka"}, {'id':2, 'name': "Gin"}, {'id':165, 'name':"Creme de Cassis"}],
  }},
  actions: {
    confirmedUnderTwenty() {
      this.underTwenty = false;
    },
    setCurrentUser(user) {
      this.currentUser = user;
      console.log(this.currentUser);
    },

    addFavourite(drinkID){
      drinkID = parseInt(drinkID)
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

    addIngredient(ingredientID, IngredientName){
      ingredientID = parseInt(ingredientID);
        if (this.ingredients.find(function(ingredientDict){
            return ingredientDict['id'] === ingredientID;
          })){
            console.log("Ingredient already in list")
          }
        else{this.ingredients = [{'id':ingredientID,'name':IngredientName }, ...this.ingredients];}
    },

    hasIngredientID(ingredientID){
      return (this.ingredients.find(function(ingredientDict){
        return ingredientDict['id'] === ingredientID;
      }))
    },
        
    removeIngredient(ingredientID) {
      function idNotIngredient(ingredientDict){
        return (ingredientDict['id'] !== ingredientID)
      }
      this.ingredients = [
        ...this.ingredients.filter(idNotIngredient),
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
