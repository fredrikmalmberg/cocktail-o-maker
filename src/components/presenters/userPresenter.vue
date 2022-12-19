<template>

    <userView :userName="userName"></userView>
      <favouritesView
        :favourites="favourites"
        :ingredientList="ingredientList"
      ></favouritesView>
      <ingredientView :ingredientList="ingredientList" @addIngredientClicked="showIngredientViewACB"></ingredientView>
      <recommendationPresenter />
      <ingredientListPresenter v-if="showIngredientPopup" @closeClicked="showIngredientViewACB"/>

</template>

<script>
/* eslint-disable */
import userView from "../views/userView.vue";
import recommendationPresenter from "./recommendationPresenter.vue";
import ingredientView from "../views/ingredientView.vue";
import { useUserStore } from "../../stores/UserStore";
import favouritesView from "../views/favouritesView.vue";
import ingredientListPresenter from "./ingredientListPresenter.vue";

export default {
  components: {
    userView,
    ingredientView,
    recommendationPresenter,
    favouritesView,
    ingredientListPresenter,
  },
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  data() {
    //console.log("data");
    return {
      showIngredientPopup: false,
    };
  },
  created() {
    //console.log("created");
  },
  mounted() {
    //console.log("mounted");
  },

  computed: {
    favourites() {
      //return [...this.userStore.favourites, 11007]; //for debug
      return this.userStore.favourites;
    },
    ingredientList() {
      return this.userStore.ingredients;
    },
    userName() {
      return this.userStore.username;
    },
  },
  methods: {
    showIngredientViewACB(){
      this.showIngredientPopup =!this.showIngredientPopup;
    }
  }
};
</script>

