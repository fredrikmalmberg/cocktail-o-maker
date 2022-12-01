import {defineStore} from "pinia";

// OBS: Right now with an example of how it can look


// defineStore will return a function
// in state we define all properties
// getters are functions that give us the info we want, in the way we want


export const useDrinkStore = defineStore("drinkStore", {
    state: () => ({
        drinks: [
            {idDrink: 1, strDrink: "Margarita", isFav: false},
            {idDrink: 2, strDrink: "Gin&Tonic", isFav: true}]
    }),
    getters: {
        favorites() {
            return this.drinks.filter(d => d.isFav)
        },
    }

})