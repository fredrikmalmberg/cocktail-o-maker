<template>
    <v-main>
        <div class="sidebar">
            <div v-if="drinks.glassesPromiseState.post">
                <v-select
                v-model="glassesSelected"
                :items="drinks.arrayGlasses"
                attach
                chips
                label="Glasses"
                multiple
                ></v-select>
            </div>
            <div v-if="drinks.ingredientsPromiseState.post">
                <v-select
                v-model="igredientsSelected"
                :items="drinks.arrayIngredients"
                attach
                chips
                label="Ingredients"
                multiple
                ></v-select>
            </div>
            <div v-if="drinks.categoriesPromiseState.post">
                <v-select
                v-model="categoriesSelected"
                :items="drinks.arrayCategories"
                attach
                chips
                label="Categories"
                multiple
                ></v-select>
            </div>
            <div v-if="drinks.alcoolFiltersPromiseState.post">
                <v-select
                v-model="filterAlcoolSelected"
                :items="drinks.arrayAlcoolFilter"
                attach
                chips
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
        glassesSelected: [],
        igredientsSelected: [],
        filterAlcoolSelected: [],
        categoriesSelected: []
  }),
}
</script>
<style scoped>
.sidebar{
        margin: 2px;
        width: 250px;
        overflow:auto;
}

</style>