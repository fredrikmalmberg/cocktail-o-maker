<template>
  <v-container>
    <h1>Welcome {{ userName }}</h1>
    <v-row >
      <v-col class="mt-2" cols="12">
        <h2>Favourites</h2>
      </v-col>
      <div class="searchResult" v-for="f in favourites" v-bind:key="f">
        <drinkThumbPresenter :favourite="f" :ingredientList="ingredientList" />
      </div>
      <router-link to="/research" style="text-decoration: none; height:'100%'">
        <div class="card2" >
          <div class="center">+</div>
        </div>
      </router-link>
    </v-row>

    <v-row>
      <v-col class="mt-2" cols="12">
        <h2>My Ingredients</h2>
      </v-col>
      <span v-for="i in ingredientList" v-bind:key="i">
        <ingredientThumbPresenter :ingredient="i['id']" />
      </span>
      <router-link
        to="/ingredients"
        style="text-decoration: none; color: inherit"
      >
        <v-btn class="mx-2" fab dark rounded color="indigo">
          <v-icon dark> mdi-plus </v-icon> Add Ingredients
        </v-btn>
      </router-link>
    </v-row>
    <v-row>
    <recommendationPresenter/>
  </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import userView from "../views/userView.vue";
import recommendationPresenterVue from "./recommendationPresenter.vue";
import ingredientThumbPresenter from "./ingredientThumbPresenter.vue";
import { useUserStore } from "../../stores/UserStore";
import drinkThumbPresenter from "./drinkThumbPresenter";
import RecommendationPresenter from './recommendationPresenter.vue';

export default {
  components: {
    userView,
    drinkThumbPresenter,
    ingredientThumbPresenter,
    RecommendationPresenter,
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
    userName(){
      return this.userStore.username;
    }
  },
};
</script>

<style scoped>
.searchResult {
  margin-inline: 5px;
  margin-top: 10px;
}
.card2 {
  margin-inline: 5px;
  margin-top: 10px;
  height: 100%;
  width: 200px;
}
.center:hover {
  background-color: #d7d7d7;
}
.center {
  vertical-align: middle;
    margin-top: 60%;
    height: 60px;
    width: 60px;
    left: 65px;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    color: #aaa;
    background-color: #e6e6e6;
    margin-bottom: 60px;
    position: relative;
    line-height: 60px;
    border-radius: 40px;
}
</style>
