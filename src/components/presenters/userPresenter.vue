<template>
  <userView :userName="userName"/>
  <h2>Favourites</h2>
  {{otherfavs}}
  <div v-for="(f, index) in otherfavs" v-bind:key="index">
    <drinkThumbPresenter :favourite="f" />
  </div>
  <h2>Recommended drinks based on your favourites</h2>
  <p>TBA</p>
  <h2>Recommended drinks based on your ingredients</h2>
  <p>TBA (We need payed API access for this)</p>
  <h2>My Ingredients</h2>
  <div v-for="(i, index) in ingredients" v-bind:key="index">
    <li>
      <ingredientThumb :ingredient="i"/>
    </li>
  </div>
  <p>TBA (Link to add ingredients..)</p>
</template>

<script>
/* eslint-disable */
import userView from '../views/userView.vue'
import ingredientThumb from '../views/ingredientThumb.vue'
import {useUserStore} from '../../stores/UserStore';
import { computed } from "vue";
//import { storeToRefs } from 'pinia'
import {getDrinkDetails2, getIngredientDetails} from '../../cocktailDBIntegration';
import drinkThumbPresenter from './drinkThumbPresenter';
import {resolvePromise} from '../../resolvePromise'

function extractValues(input) {
  if (input.data) {
    return input.data;
  } else {
    return "Loading..";
  }
}

export default {
  components: {
    userView,
    drinkThumbPresenter,
    ingredientThumb,
  },
  methods: {
    drinkClickedACB(id) {
      this.$router.push({
        name: 'drinkDetails',
        params: {id: id},
      })
    },
    resolvePromises(arr) {
      arr.map(resolvePromise(el, this.resultPromiseState));
    },
    fetchFavourites() {
      //this.otherfavs = this.userStore.favourites.map(getDrinkDetails).map(extractValues);
      this.otherfavs = this.userStore.favourites;
      //resolvePromise(this.userStore.favourites.map(getDrinkDetails2), resultPromiseState);
      //this.resolvePromises(this.otherfavs);
      },
  },
  setup() {
    const userStore = useUserStore();
    //const { favourites } = storeToRefs(userStore).map(getDrinkDetails).map(extractValues);
    //const { removeFavourite } = useStore;
    
    return {
        userStore, 
        removeDrinkACB: computed(() => userStore.removeFavourite)};
  },
  data() {

    return {
      resultPromiseState: {},
      userName: this.$route.params.name,
      ingredients: this.userStore.ingredients.map(getIngredientDetails).map(extractValues),
    }
  },
  created() {
    this.$watch(
        //() => this.$route.params,
        () => this.otherfavs,
        () => {
          this.fetchFavourites()
        },
        {immediate: true}
    )
  },
}
</script>

<style scoped>

</style>