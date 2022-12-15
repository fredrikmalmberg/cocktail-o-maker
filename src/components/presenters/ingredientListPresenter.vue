<template>
  <div v-if="resultPromiseState.data">
    <v-text-field  label="Search ingredients.." variant="solo"
            clearable v-model="searchTerm"  />
    <span v-for="(i, item) in allIngredientNames" v-bind:key="item">
      <ingredientSearchPresenter :ingredientName="i" />
    </span>
  </div>
</template>

<script>
import { getIngredientList } from "../../cocktailDBIntegration";
import ingredientSearchPresenter from "./ingredientSearchPresenter.vue";
export default {
  components: {
    ingredientSearchPresenter,
  },
  mounted() {
    this.resultPromiseState = getIngredientList();
  },
  data() {
    return {
      searchTerm: "",
      resultPromiseState: { data: null, error: null },
    };
  },
  computed: {
    allIngredientNames() {
      let arr = [];
      if (this.resultPromiseState.data) {
        for (let n = 0; n < this.resultPromiseState.data.drinks.length; n++) {
          if (!this.searchTerm || this.searchTerm === "") {
            arr = [
              ...arr,
              this.resultPromiseState.data.drinks[n].strIngredient1,
            ];
          } else {
            if (
              this.resultPromiseState.data.drinks[n].strIngredient1
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase())
            ) {
              arr = [
                ...arr,
                this.resultPromiseState.data.drinks[n].strIngredient1,
              ];
            }
          }
        }
      }
      return arr;
    },
  },
};
</script>
