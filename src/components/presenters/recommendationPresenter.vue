<template>
    <recommendationView v-if="showRecommendations" :ingredientList="ingredientList" :recommendationList="recommendationList"></recommendationView>
</template>

<script>
import recommendationView from "../views/recommendationView.vue";
import { useUserStore } from "../../stores/UserStore";
import { searchByIngredient } from "../../cocktailDBIntegration.js";
export default {
  components: { recommendationView,
},
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      resultPromiseStates: [],
      recommendationList: [],
      allDrinks:[],
    };
  },
  created() {
    this.getDrinksFromIngredients()
  },
  watch: {
    ingredientList(){
      this.getDrinksFromIngredients()
    }
  },
  methods: {
    getDrinksFromIngredients(){
      this.allDrinks = []
      for (let i = 0; i < this.ingredientList.length; i++) {
        searchByIngredient(this.ingredientList[i]["name"]).then(this.getDrinkFromPromise).then(this.getRecommendationList)
      }
    },
    getDrinkFromPromise(promise){
      //console.log("Running getDrinkFromPromise")
      if (promise.data){
      for (
            let n = 0;
            n < promise.data.value.drinks.length;
            n++
          ) {
            this.allDrinks = [...this.allDrinks, promise.data.value.drinks[n].idDrink];
          }
        }
      return
    },
    showRecommendations() {
      return this.resultPromiseStates[this.resultPromiseStates.length - 1].data;
    },
    getRecommendationList() {
      let arr = this.allDrinks
      //console.log("length of arr in getrec", arr.length);
      var recommendationDict = {};
      for (let n = 0; n < arr.length; n++) {
        if (arr[n] in recommendationDict) {
          recommendationDict[arr[n]] = recommendationDict[arr[n]] + 1;
        } else {
          recommendationDict[arr[n]] = 1;
        }
      }
      recommendationDict = Object.keys(recommendationDict).map(function (key) {
        return [key, recommendationDict[key]];
      });
      recommendationDict.sort(function (firstID, secondID) {
        return secondID[1] - firstID[1];
      });
      let recommendationArr = []
      for (const item of Object.entries(recommendationDict.slice(0, 15))) {
        recommendationArr = [...recommendationArr, parseInt(item[1][0])]
        }
    //console.log("Full list should be", recommendationArr);
      this.recommendationList = recommendationArr;
    },
  },
  computed: {

    ingredientList() {
      return this.userStore.ingredients;
    },
  },
};
</script>

