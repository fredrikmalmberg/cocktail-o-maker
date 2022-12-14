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
  <div class="">
    <v-card class="card"
    width="200"

         @click="$emit('drinkClicked')">
        <v-card-title>{{ name }}</v-card-title> 
        <v-img
          v-bind:src=imgUrl
      ></v-img>
      <v-card-actions>
        
        <v-btn v-if="isFavourite"
        class="mx-2"
        icon="mdi-heart"
        color="red"
          @click.stop="$emit('removeFavourite')"
        >
      <v-icon dark>
        mdi-heart
      </v-icon>
        </v-btn>
        <v-btn v-else
        class="mx-2"
        icon="mdi-heart"
        color="secondary"
          @click.stop="$emit('addFavourite')"
        >
        <v-icon dark>
        mdi-heart
      </v-icon>
        </v-btn>
      </v-card-actions>
      
    </v-card>
</div>
  
</template>


<style scoped>
.card{
  background-color: #efefef;
}
</style>
