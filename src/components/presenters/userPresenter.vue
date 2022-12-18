<template>
  <v-container>
    <userView :userName="userName"></userView>
      <favouritesView
        :favourites="favourites"
        :ingredientList="ingredientList"
      ></favouritesView>
      <ingredientView :ingredientList="ingredientList" @addIngredientClicked="showIngredientViewACB"></ingredientView>
      <recommendationPresenter v-if="ingredientList[0]" :ingredientList="ingredientList"/>
      <div v-if="showIngredientPopup" class="blocker noscroll" @click="showIngredientViewACB"></div>
      <ingredientListPresenter class="ingredientPopUp" v-if="showIngredientPopup" @closeClicked="showIngredientViewACB"/>
  </v-container>
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
<style scoped>
.ingredientPopUp{
  position: absolute;
    top: 15px;
    background-color: white;
    z-index: 1200;
    display: block;
    margin: 30px;
    padding: 10px;
    left: 0px;
    border: 1px black;
    box-shadow: 1px 1px 20px;
    border-radius: 8px;
}
.blocker{
  position: fixed;
  
    top: 0px;
    left: 0px;
    z-index: 1199;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    overflow: hidden;
}
</style>
