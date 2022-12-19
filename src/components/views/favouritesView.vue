<template>
    <v-row class="section justify-space-around">
    <v-col class="mt-2" cols="12">
        <h2>My Favourites</h2>
      </v-col>
      
      <div class="searchResult" v-for="f in favourites" v-bind:key="f">
        <drinkThumbPresenter :favourite="f" :ingredientList="ingredientList" />
      </div>
      <router-link to="/research" style="text-decoration: none; height:'100%'">
        <div class="card2" >
          <div v-if="favourites[0]" class="center">+</div>
          <div v-else class="center signal">+</div>
          <div class="addFavHint" v-if="!favourites[0]">Start by adding favourites</div>
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
.signal {
    color: rgb(246, 33, 33);
    background-color: #e6e6e6;
}
.addFavHint {
  text-align: center;
    font-size: 25px;
    top: -30px;
    position: relative;
    font-weight: bold;
}
.section{
  background-color: white;
  border-radius: 5px;
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

}

</style>
