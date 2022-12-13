<template>
  <userView :userName="userName"/>
  <h2>Favourites</h2>
  <div class="searchResult" v-for="f in favourites" v-bind:key="f">
    <drinkThumbPresenter :favourite="f" />
  </div>
  <h2>Recommended drinks based on your favourites</h2>
  <p>TBA</p>
  <h2>Recommended drinks based on your ingredients</h2>
  <p>TBA (We need payed API access for this)</p>
  <h2>My Ingredients</h2>
  <div v-for="i in ingredientList" v-bind:key="i">
      <ingredientThumbPresenter :ingredient="i"/>
  </div>
  <router-link to="/ingredients">Add more ingredients to your inventory</router-link>
</template>

<script>
/* eslint-disable */
import userView from '../views/userView.vue'
import ingredientThumbPresenter from './ingredientThumbPresenter.vue'
import {useUserStore} from '../../stores/UserStore';
import drinkThumbPresenter from './drinkThumbPresenter';


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
    }
  },
  data() {
    console.log("data")
    return {
      userName: this.$route.params.name,
    }
  },
  created() {
    console.log("created")
  },
  mounted() {
    console.log("mounted")
  },

  computed: {
    favourites() {
      return [...this.userStore.favourites, 11007]
    },
    ingredientList() {
      return this.userStore.ingredients
    }
  },
}
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