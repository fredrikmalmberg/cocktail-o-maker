<template>
  <div v-if="resultPromiseState.data">
    <v-col class="text-right">
      <v-btn @click="$emit('closeClicked')" icon="mdi-close" color="indigo" size="x-small"></v-btn>
    </v-col>
    <v-text-field class="shrink" label="Search ingredients.." variant="solo"
            clearable v-model="searchTerm"/>
    
    
    
    <span v-for="(i) in allIngredientNames" v-bind:key="i[0]">
      <ingredientSearchPresenter :ingredientName="i[1]" />
    </span>
  </div>
</template>

<script>
import { getIngredientList } from "../../cocktailDBIntegration";
import ingredientSearchPresenter from "./ingredientSearchPresenter.vue";
export default {
  emits: ['closeClicked'],
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
              [n,this.resultPromiseState.data.drinks[n].strIngredient1],
            ];
          } else {
            if (
              this.resultPromiseState.data.drinks[n].strIngredient1
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase())
            ) {
              arr = [
                ...arr,
                [n,this.resultPromiseState.data.drinks[n].strIngredient1],
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
