<template>
    <recommendationView v-if="showRecommendations" :ingredientList="ingredientList" :recommendationList="recommendationList()"></recommendationView>
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

