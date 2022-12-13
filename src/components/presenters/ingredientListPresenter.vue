<template>
<div v-if="resultPromiseState.data" >
  <div class="searchResult" v-for="(i, item) in resultPromiseState.data.drinks" v-bind:key="item">
    <ingredientSearchPresenter :ingredientName="i.strIngredient1"/>
  </div>

</div>
</template>

<script>
import {getIngredientList} from '../../cocktailDBIntegration';
import ingredientSearchPresenter from './ingredientSearchPresenter.vue'
export default {
  components: {
    ingredientSearchPresenter,
  },
    mounted() {
    this.resultPromiseState = getIngredientList();
  },
    data() {
    return { resultPromiseState: { data: null, error: null} };
  },

}
</script>
