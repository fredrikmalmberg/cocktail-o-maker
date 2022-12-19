<script>
import lazyImg from "@/assets/lazyLoad.png";

export default {
  props: {
    name: {required: true},
    imgUrl: {required: true},
    isFavourite: {required: false},
    ingredientsInInventory: {required: true},
    totalIngredients: {required: true},
  },
  computed: {
        lazyImg() {
            return lazyImg;
        },
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
          :src=imgUrl
          :lazy-src=lazyImg
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
        You have {{ingredientsInInventory}} of {{totalIngredients}} ingredients

      </v-card-actions>
      
    </v-card>
</div>
  
</template>


<style scoped>
.card{
  background-color: #fafafa;
}
</style>
