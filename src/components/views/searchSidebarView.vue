<template>
    <v-main>
        <div class="sidebar">
            <div v-if="drinks.categoriesPromiseState.post">
                <v-select
                v-model="categoriesSelected"
                :items="drinks.arrayCategories"
                attach
                label="Categories"
                ></v-select>
            </div>
            <div v-if="drinks.ingredientsPromiseState.post">
                <v-select
                v-model="ingredientsSelected"
                :items="drinks.arrayIngredients"
                attach
                chips
                label="Ingredients"
                multiple
                ></v-select>
            </div>
            <div v-if="drinks.glassesPromiseState.post">
                <v-select
                v-model="glassesSelected"
                :items="drinks.arrayGlasses"
                attach
                label="Glasses"
                ></v-select>
            </div>
            <div v-if="drinks.alcoolFiltersPromiseState.post">
                <v-select
                v-model="filterAlcoolSelected"
                :items="drinks.arrayAlcoolFilter"
                attach
                label="Alcool Filters"
                ></v-select>
            </div>

    </div>
  </v-main>
</template>

<script>

export default{
    props:['drinks'],
    setup() {
    },
      data: () => ({
        glassesSelected: "",
        ingredientsSelected: [],
        filterAlcoolSelected: "",
        categoriesSelected: ""
  }),
    watch: {
    // whenever question changes, this function will run
    glassesSelected(newGlasses) {
      this.updatefilter('glasses', newGlasses);
    },
    ingredientsSelected(newIngredients) {
      this.updatefilter('ingredients', newIngredients);
    },
    filterAlcoolSelected(newFilterAlcool) {
      this.updatefilter('alcoolFilter', newFilterAlcool)
    },
    categoriesSelected(newCategories) {
      this.updatefilter('categories', newCategories)
    }

  },
  methods:{
    updatefilter(type, value){
        this.$emit('updatefilter',type, value);
    }
  }
}
</script>
<style scoped>
.sidebar {
  margin: 2px;
  width: 250px;
  overflow: auto;
}

</style>