<template>
  <v-main>

    <div v-if="searchResult">
      <div v-if="searchResult.error">
        {{ searchResult.error }}
      </div>
      <div v-if="searchResult.post">
        <div>
          <div class="searchResult" v-for="element in searchResult.post.drinks" :key="element.idDrink">
            <drinkThumbPresenter :favourite="element['idDrink']" :ingredientList="this.ingredientList"/>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
import drinkThumbPresenter from '../presenters/drinkThumbPresenter.vue';
export default {
  props: {searchResult: {required: true},
          ingredientList: {required: false, default : []},
},
  
  
  data: () => ({}),
  methods: {
    detail(idDrink) {
      console.log(idDrink);
      this.$emit('drinkClickedEvent', idDrink);
    }
  },
  components:{
    drinkThumbPresenter
  }
}
</script>

<style scoped>
.searchResult {
  text-align: center;
  display: inline-block;
  margin-inline: 5px;
  margin-top: 5px;
  
}
</style>