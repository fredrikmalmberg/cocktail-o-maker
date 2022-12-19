<template>
  <ingredientListView
    v-if="allIngredientNames[0]"
    :allIngredientNames="filteredIngredientNames"
    :filterIngredientEvent="filterIngredientNamesACB"
    @closeClicked="showIngredientViewACB"
  >
  </ingredientListView>
</template>

<script>
import { getIngredientList } from "../../cocktailDBIntegration";
import ingredientListView from "../views/ingredientListView.vue";
export default {
  emits: ["closeClicked"],
  components: {
    ingredientListView,
  },
  mounted() {
    
  },
  data() {
    return {
      allIngredientNames: [],
      filteredIngredientNames: [],
      resultPromiseState: { data: null, error: null },
    };
  },

  methods: {
    showIngredientViewACB() {
      this.$emit("closeClicked");
    },
    filterIngredientNamesACB(searchTerm){
      let arr = []
      for (let n = 0; n < this.allIngredientNames.length; n++) {
      if (!searchTerm || searchTerm === "") {
          this.filteredIngredientNames = this.allIngredientNames  
          return
          } else {
            if (
              this.allIngredientNames[n][1]
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              arr = [
              ...arr,
              [n,this.allIngredientNames[n][1]],
            ];
            }
          }
        }
      this.filteredIngredientNames = arr;
    },
    getAllIngredientNames(promise) {
      let arr = [];
      if (promise.data){
        let ingrList = promise.data.value.drinks
        for (let n = 0; n < ingrList.length; n++) {
          //console.log(n)
            arr = [
              ...arr,
              [n, ingrList[n].strIngredient1],
            ];
        }
      }
      this.allIngredientNames = arr;
      this.filteredIngredientNames = arr;
    },
  },
  created() {
    getIngredientList().then(this.getAllIngredientNames);
  },
  
};
</script>
