<script>

import {getDrinkDetails} from '../../cocktailDBIntegration.js';
import {useUserStore} from '../../stores/UserStore';
import detailsView from '../views/detailsView.vue'

export default {
  components: {detailsView},
  data() {
    return {
      resultPromiseState: { data: null, error: null} ,
      userStore: useUserStore(),
    }
  },
  mounted(){
    console.log(this.$route.params.id)
    this.resultPromiseState = getDrinkDetails(parseInt(this.$route.params.id));
    console.log(this.resultPromiseState)
  },
  computed: {
    ingredientList() {
      return this.userStore.ingredients;
    },
  },
  methods: {
  
  },
  
}

</script>


<template>
  asdsa
      <detailsView :drinkData="resultPromiseState.data" :ingredientList="ingredientList" />
</template>