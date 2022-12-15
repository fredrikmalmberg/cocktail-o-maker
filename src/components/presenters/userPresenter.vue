<template>
  <v-container>
    <userView :userName="userName"></userView>
      <favouritesView
        :favourites="favourites"
        :ingredientList="ingredientList"
      ></favouritesView>
      <ingredientView :ingredientList="ingredientList"></ingredientView>
      <recommendationPresenter />
  </v-container>
</template>

<script>
/* eslint-disable */
import userView from "../views/userView.vue";
import recommendationPresenter from "./recommendationPresenter.vue";
import ingredientView from "../views/ingredientView.vue";
import { useUserStore } from "../../stores/UserStore";
import favouritesView from "../views/favouritesView.vue";

export default {
  components: {
    userView,
    ingredientView,
    recommendationPresenter,
    favouritesView,
  },
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  data() {
    console.log("data");
    return {
      image: "@/assets/takeover.jpg",
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
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
};
</script>

