<template>
    <v-row>
    <v-col class="mt-2" cols="12">
        <h2>My Favourites</h2>
      </v-col>
      <div class="searchResult" v-for="f in favourites" v-bind:key="f">
        <drinkThumbPresenter :favourite="f" :ingredientList="ingredientList" />
      </div>
      <router-link to="/research" style="text-decoration: none; height:'100%'">
        <div class="card2" >
          <div class="center">+</div>
        </div>
      </router-link>
    </v-row>
</template>

<script>
import drinkThumbPresenter from '../presenters/drinkThumbPresenter.vue';
export default {
  components: {
    drinkThumbPresenter,
  },
  data() {
    
  },
  props: {
    favourites: {required: false},
    ingredientList: {required: true},
  },
  }
</script>
<style scoped>
.searchResult {
  margin-inline: 5px;
  margin-top: 10px;
}
.card2 {
  margin-inline: 5px;
  margin-top: 10px;
  height: 100%;
  width: 200px;
}
.center:hover {
  background-color: #d7d7d7;
}
.center {
  vertical-align: middle;
    margin-top: 60%;
    height: 60px;
    width: 60px;
    left: 65px;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    color: #aaa;
    background-color: #e6e6e6;
    margin-bottom: 60px;
    position: relative;
    line-height: 60px;
    border-radius: 40px;
}
</style>
