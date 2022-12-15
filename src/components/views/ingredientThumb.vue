<template>
   
  
    <v-btn 
    v-if="hasIngredient" 
    rounded="pill"
    class="ingredientButton"
    color="green"
    x-large
    @click="$emit('removeIngredient')"
    >{{ name }}</v-btn>
    <v-btn 
    v-else
    rounded="pill"
    class="ingredientButton"
    x-large
    @click="$emit('addIngredient')"
    >{{ name }}</v-btn>
  

</template>

<script>
export default {
  props: {
    name: {required: true},
    hasIngredient: {required: false},
  },

  methods: {
  }
}
</script>

<style scoped>
.ingredientButton {
  
  margin: 5px;
}
</style>
