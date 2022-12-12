<script>


export default {
  props: {
    name: {required: true},
    imgUrl: {required: true},
    drinkID: {required: true},
    drinkClickedEvent: {required: true},
    isFavourite: {required: false},
    removeDrinkEvent: {required: true},
    otherValue: {required: false},

  },

  methods: {
    removeFavouriteClickedACB(drinkID){
      console.log("removing: ", drinkID);
      this.$props.removeDrinkEvent(drinkID);
    },
    drinkClickedACB(drinkID) {
      //console.log(option['value'].drinks[0].idDrink);
      this.$props.drinkClickedEvent(drinkID);
    }
  }
}

</script>


<template>
  <div class="searchResult">
      <div>
    <v-card
        elevation="2" @click="drinkClickedACB(drinkID)">
      <v-img
          height="100"
          v-bind:src=imgUrl
      ></v-img>
      <v-card-title>{{ name }}</v-card-title> 
      
      <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
      ></v-rating>
      
    </v-card>
    
  </div>
</div>
  <v-button v-if="isFavourite" @click="removeFavouriteClickedACB(drinkID)"> Remove Favourite </v-button>
</template>


<style scoped>
.searchResult {
  text-align: center;
  display: inline-block;
  width: 200px;
  vertical-align: text-top;
  margin-inline: 40px;
  overflow: auto;
}
</style>
