<template>
  Value: {{this.someValue}}
    <recommendationView v-if="someValue[0]" :ingredientList="ingredientList" :recommendationList="someValue"></recommendationView>
</template>

<script>
/* eslint-disable */
import recommendationView from "../views/recommendationView.vue";

import { searchByIngredient } from "../../cocktailDBIntegration.js";
import { useUserStore } from "../../stores/UserStore";
//import {ref} from "vue";
export default {
  components: { recommendationView,
},
  props: {
    ingredientList: {required: true}
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
      someValue: [],
      showRecommendations: false,
      newIngList: [],
      jsonPromiseStates: []
    };
  },
  created() {
    this.someValue = Promise.allSettled(this.getPromisesForIngredients(this.$props.ingredientList)).then((value) => {this.recommendationList(value)})
    //this.someValue = this.userStore.ingredients;
    console.log(this.someValue)
    //this.recommendationList()

  },
  mounted() {
    //console.log(this.resultPromiseStates.length);
    //this.showRecommendations = this.recommendationList();
  },
  watch :{
     'this.showRecommendations': {
      handler(newValue) {
        console.log("test", newValue)
      },
      deep: true
    }
  },
  methods: {
    getPromisesForIngredients(ing){
      console.log("ingredients number", ing)
      let allPromises = []
      for (let i = 0; i < ing.length; i++) {
        allPromises = [
        ...allPromises,
        searchByIngredient(ing[i]["name"]),
      ];
    }
    console.log("test",allPromises[0] )
    
    return [allPromises];
    //if (this.resultPromiseStates[0].data)
    //  {console.log("promisestate", this.resultPromiseStates[0])
    //  const value = JSON.parse(JSON.stringify(this.resultPromiseStates[0]))
    //  console.log("json value", value)
      //return value.data
    
    
  },
   // ingredientList() {
        //console.log("ingredient I have ", this.userStore.ingredient)
    //    this.someValue= this.userStore.ingredients;
    //  return this.userStore.ingredients;
    //},
  
  recommendationList(promises) {
      let arr = [];
      console.log("promises", promises[0].value)
      console.log("promises length", promises[0].value.length)
      //for (let i = 0; i < promises[0].value.length; i++) {

        //let currentPromise = promises[0].value[i];
        for (const currentPromise in promises[0].value) {  
        
        console.log("promise is: ", promises[0].value[currentPromise]);
        if (promises[0].value[currentPromise].data['value'])
        {console.log("data in rec list", promises[0].value[currentPromise].data);
        //debugger;
        }

        if (promises[0].value[currentPromise].data && promises[0].value[currentPromise].data.drinks) {
          debugger;
          for (
            let n = 0;
            n < promises[0].value[currentPromise].data.drinks.length;
            n++
          ) {
            console.log(promises[0].value[currentPromise].data.drinks);
            arr = [...arr, promises[0].value[currentPromise].data.drinks[n].idDrink];
          }
        }
      }
    return Promise.all(arr)
    },
recsFromDrinkList(arr){
      console.log("total drinks", arr.length);
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
    console.log("rec arr", recommendationArr);
      return recommendationArr;
    },
  },
  computed: {
    //showRecommendations() {
    //  return this.recommendationList();
    //},

    
  
    
  },
};
</script>

