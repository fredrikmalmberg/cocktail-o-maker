<script>
/* eslint-disable */
import {getDrinkDetails} from '../../cocktailDBIntegration.js';
import {useUserStore} from '../../stores/UserStore';
import DetailsView from '../views/detailsView.js'
import {useDrinkStore} from '../../stores/DrinkStore';

export default {
  components: {DetailsView},
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      userStore: useUserStore(),
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        {immediate: true}
    )
  },

  methods: {
    addToFavourites(drinkID) {
      this.userStore.addFavourite(parseInt(this.$route.params.id));
    },

    fetchData() {

      this.error = this.post = null
      this.loading = true

      const {isFetching, error, data} = getDrinkDetails(this.$route.params.id);
      if (error) {
        console.log(error);
        this.error = error;
      }
      if (data) {
        console.log(data);
        this.post = data;
      }
      this.loading = isFetching;
    },
  },
}
/* eslint-disable */

</script>


<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <v-btn>
        <router-link to="/research">BACK</router-link>
      </v-btn>

      <DetailsView :detailsDrinks="post" :drinkClickedEvent="drinkClickedACB"/>
      <v-spacer></v-spacer>
      <v-btn @click="addToFavourites()">Add to favourites</v-btn>
    </div>
  </div>
</template>