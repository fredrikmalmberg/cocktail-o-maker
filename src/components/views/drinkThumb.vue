<script>
import lazyImg from "@/assets/lazyLoad.png";

export default {
  props: {
    name: { required: true },
    imgUrl: { required: true },
    isFavourite: { required: false },
    ingredientsInInventory: { required: true },
    totalIngredients: { required: true },
  },
  computed: {
    lazyImg() {
      return lazyImg;
    },
  },
};
</script>

<template>
  <div class="">
    <v-card class="card" width="200" @click="$emit('drinkClicked')">
      <v-card-title>{{ name }}</v-card-title>
      <v-img width="200" height="200" :src="imgUrl" :lazy-src="lazyImg"></v-img>
      <v-card-actions>
        <v-btn variant="flat"
          v-if="isFavourite"
          class="mx-2"
          icon="mdi-heart"
          color="red"
          size="small"
          @click.stop="$emit('removeFavourite')"
        >
          <v-icon dark> mdi-heart </v-icon>
        </v-btn>
        <v-btn variant="flat"
          v-else
          class="mx-2 fadeHeart"
          icon="mdi-heart"
          size="small"
          @click.stop="$emit('addFavourite')"
        >
          <v-icon dark> mdi-heart </v-icon>
        </v-btn>
        You have {{ ingredientsInInventory }} of
        {{ totalIngredients }} ingredients
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.card {
  background-color: #f2f2f2;
}
.fadeHeart{
  color:"rgb(100,100,100)";
}
</style>
