<template>
  <v-main>

    <div v-if="detailsDrink">
      <div v-if="detailsDrink.error">
        {{ detailsDrink.error }}
      </div>
      <div v-if="detailsDrink.post">
        <div>
          <div class="detailsDrink" v-for="element in detailsDrink.post.drinks" :key="element.idDrink">
            <v-card
                elevation="2">
              <v-img
                  height="250"
                  v-bind:src="element.strDrinkThumb"
                  style="text-align:center;"
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
  props: ['detailsDrink'],
  data: () => ({}),

}
</script>
