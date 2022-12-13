<template>
  <v-card elevation="2">
    {{ name }}
    <span v-if="hasIngredient">✓</span>
    <button 
    v-if="hasIngredient" 
    @click="$emit('removeIngredient')"
    >Remove Ingredient</button>
  </v-card>

</template>

<script>
/* eslint-disable */

export default {
  props: {
    name: {required: true},
    hasIngredient: {required: false},
  },

  methods: {
  }
}
/* eslint-disable */
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
