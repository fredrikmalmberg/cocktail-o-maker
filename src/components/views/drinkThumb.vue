<script>


export default {
  props: {
    name: {required: true},
    imgUrl: {required: true},
    isFavourite: {required: false},
  },
}

</script>


<template>
  <div class="searchResult">
    <v-card
        elevation="2" @click="$emit('drinkClicked')">
      <v-img
          height="100"
          v-bind:src=imgUrl
      ></v-img>
      <v-card-title>{{ name }}</v-card-title> 
      <v-card-actions>
        <v-btn v-if="isFavourite"
          color="deep-purple lighten-2"
          text
          @click.stop="$emit('removeFavourite')"
        >
          Remove Favourite
        </v-btn>
      </v-card-actions>
    </v-card>
</div>
  
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
