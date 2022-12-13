<template>
  <v-main>

    <div v-if="searchResult">
      <div v-if="searchResult.error">
        {{ searchResult.error }}
      </div>
      <div v-if="searchResult.post">
        <div>
          <div class="searchResult" v-for="element in searchResult.post.drinks" :key="element.idDrink">
            <v-card
                elevation="2">
              <v-img
                  @click="detail(element.idDrink)"
                  height="200"
                  width="200"
                  v-bind:src="element.strDrinkThumb"
                  style="border-radius: 10%; border: 5px solid #f5f5f5;"
              ></v-img>
              <v-card-title>{{ element.strDrink }}</v-card-title>
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
      </div>
    </div>
  </v-main>
</template>

<script>

export default {
  setup() {
  },
  props: ['searchResult'],
  data: () => ({}),
  methods: {
    detail(idDrink) {
      console.log(idDrink);
      this.$emit('drinkClickedEvent', idDrink);
    }
  }
}
</script>

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