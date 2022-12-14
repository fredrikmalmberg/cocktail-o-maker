<template>
  <v-container>
    <h1>{{ userName }}</h1>
    <v-row justify="space-around">
      <v-col class="mt-2" cols="12">
        <h2>Favourites</h2>
      </v-col>
      <div class="searchResult" v-for="f in favourites" v-bind:key="f">
        <drinkThumbPresenter :favourite="f" :ingredientList="ingredientList"/>
      </div>
      
        <v-col>
          <router-link to="/research" style="text-decoration: none; color: inherit;">
          <v-btn rounded absolute top> Find more favourites.. </v-btn>
        </router-link>
        </v-col>
      
    </v-row>

    <v-row>
      <v-col class="mt-2" cols="12">
        <h2>My Ingredients</h2>
      </v-col>
      <span v-for="i in ingredientList" v-bind:key="i">
        <ingredientThumbPresenter :ingredient="i['id']" />
      </span>
      <router-link to="/ingredients" style="text-decoration: none; color: inherit;">
        <v-btn class="mx-2" fab dark rounded color="indigo">
          <v-icon dark> mdi-plus </v-icon> Add more
        </v-btn>
      </router-link>
    </v-row>
    <v-row>
      <v-col class="mt-2" cols="12">
        <h2>Recommended drinks based on your ingredients</h2>
      </v-col>
      <p>TBA (We need payed API access for this)</p>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import userView from "../views/userView.vue";
import ingredientThumbPresenter from "./ingredientThumbPresenter.vue";
import { useUserStore } from "../../stores/UserStore";
import drinkThumbPresenter from "./drinkThumbPresenter";

export default {
  components: {
    userView,
    drinkThumbPresenter,
    ingredientThumbPresenter,
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
      userName: this.$route.params.name,
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
  },
};
</script>

<style scoped>
.searchResult {
  text-align: center;
  display: inline-block;
  vertical-align: text-top;
  margin-inline: 40px;
  overflow: auto;
}
</style>
