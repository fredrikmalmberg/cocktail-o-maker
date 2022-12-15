<template>
  <div v-if="showRecommendations">
    <div v-for="f in recommendationList()" v-bind:key="f">
        <drinkThumbPresenter :favourite="f" :ingredientList="ingredientList" />
      </div>
  </div>
</template>

<script>
//import recommendationView from "../views/recommendationView.vue";
import drinkThumbPresenter from "./drinkThumbPresenter.vue";
import { useUserStore } from "../../stores/UserStore";
import { searchByIngredient } from "../../cocktailDBIntegration.js";
export default {
  components: { //recommendationView,
drinkThumbPresenter },
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      resultPromiseStates: [],
    };
  },
  created() {
    for (let i = 0; i < this.ingredientList.length; i++) {
      this.resultPromiseStates = [
        ...this.resultPromiseStates,
        searchByIngredient(this.ingredientList[i]["name"]),
      ];
    }
  },
  mounted() {
    //console.log(this.resultPromiseStates.length);
  },
  methods: {
    showRecommendations() {
      return this.resultPromiseStates[this.resultPromiseStates.length - 1].data;
    },
    recommendationList() {
      let arr = [];
      for (let i = 0; i < this.resultPromiseStates.length; i++) {
        //console.log(this.resultPromiseStates[i]);
        if (this.resultPromiseStates[i].data) {
          for (
            let n = 0;
            n < this.resultPromiseStates[i].data.drinks.length;
            n++
          ) {
            //console.log(this.resultPromiseStates[i].data.drinks);
            arr = [...arr, this.resultPromiseStates[i].data.drinks[n].idDrink];
          }
        }
      }
      //console.log(arr.length);
      var recommendationDict = {};
      for (let n = 0; n < arr.length; n++) {
        if (arr[n] in recommendationDict) {
          recommendationDict[arr[n]] = recommendationDict[arr[n]] + 1;
        } else {
          recommendationDict[arr[n]] = 1;
        }
      }
      //console.log(recommendationDict);
      recommendationDict = Object.keys(recommendationDict).map(function (key) {
        return [key, recommendationDict[key]];
      });

      // Sort the array based on the second element
      recommendationDict.sort(function (firstID, secondID) {
        return secondID[1] - firstID[1];
      });

      // Create a new array with only the first 5 items
      //console.log(recommendationDict.slice(0, 5));
      let recommendationArr = []
      for (const item of Object.entries(recommendationDict.slice(0, 5))) {
        recommendationArr = [...recommendationArr, parseInt(item[1][0])]
        }
    //console.log(recommendationArr);
      return recommendationArr;
    },
  },
  computed: {

    ingredientList() {
        //console.log("ingredient I have ", this.userStore.ingredient)
      return this.userStore.ingredients;
    },
  },
};
</script>
<style scoped>

</style>
