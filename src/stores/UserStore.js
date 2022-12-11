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
    addFavourite(drinkID) {
      this.favourites = [drinkID, ...this.favourites];
    },
    setCurrentUser(user) {
      this.currentUser = user;
      console.log(this.currentUser);
    },
  },
});
