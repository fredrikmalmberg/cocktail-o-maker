<template>
   
  
    <v-btn 
    v-if="hasIngredient" 
    rounded="pill"
    class="mx-2"
    color="green"
    x-large
    @click="$emit('removeIngredient')"
    >{{ name }}</v-btn>
    <v-btn 
    v-else
    rounded="pill"
    class="mx-2"
    x-large
    @click="$emit('addIngredient')"
    >{{ name }}</v-btn>
  

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
