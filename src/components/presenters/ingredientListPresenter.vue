<template>
  <ingredientListView
    v-if="resultPromiseState.data"
    :allIngredientNames="allIngredientNames"
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
    this.resultPromiseState = getIngredientList();
  },
  data() {
    return {
      searchTerm: "",
      resultPromiseState: { data: null, error: null },
    };
  },

  methods: {
    showIngredientViewACB() {
      this.$emit("closeClicked");
    },
  },
  computed: {
    allIngredientNames() {
      let arr = [];
      if (this.resultPromiseState.data) {
        for (let n = 0; n < this.resultPromiseState.data.drinks.length; n++) {
            arr = [
              ...arr,
              [n, this.resultPromiseState.data.drinks[n].strIngredient1],
            ];
        }
      }
      return arr;
    },
  },
};
</script>
