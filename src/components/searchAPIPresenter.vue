


<script>

import {searchDrinkByName} from '../cocktailDBIntegration.js';
import SearchResultsView from '../views/searchResultsView.js'
export default {
  components: {SearchResultsView},
  data() {
    return {
      loading: false,
      post: null,
      error: null,
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
      { immediate: true }
    )
  },

  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      const { isFetching, error, data } = searchDrinkByName("long island");
      if (error){
        //console.log(error);
        this.error = error;
      }
      if (data){
        //console.log(data);
        console.log(data);
        this.post = data;
      }
      this.loading = isFetching;
    },
  },
}
</script>

<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <SearchResultsView :searchResults=post />
      <p>RAW PAYLOAD: {{ post }}</p>
    </div>
  </div>
</template>