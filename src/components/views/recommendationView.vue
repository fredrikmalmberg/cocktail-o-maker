<template>
<v-row class="recommendationsSection justify-space-around">
      <v-col class="mt-2" cols="12">
        <h2>Recommended drinks based on your ingredients</h2>
      </v-col>
      <div class="searchResult " v-for="f in recommendationList" v-bind:key="f">
        <drinkThumbPresenter :favourite="f" :ingredientList="ingredientList" />
      </div>
</v-row>
</template>

<script>
import drinkThumbPresenter from '../presenters/drinkThumbPresenter.vue';
export default {
    
    components:{
      drinkThumbPresenter
    },
    props: {
      recommendationList: {required: true},
      ingredientList: {required: true}
    }
}
</script>

<style scoped>

.searchResult {
  margin-inline: 5px;
  margin-top: 10px;
}
.recommendationsSection{
  background-color: white;
  border-radius: 5px;
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  padding-bottom: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

}
</style>