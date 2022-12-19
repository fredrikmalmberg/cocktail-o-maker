<template>
  <div class="blocker noscroll" @click="$emit('closeClicked')"></div>
  <div class="ingredientPopUp">
    <v-col class="text-right">
      <v-btn
        @click="$emit('closeClicked')"
        icon="mdi-close"
        color="indigo"
        size="x-small"
      ></v-btn>
    </v-col>
    <v-text-field
      @input="(event) => filterIngredientEvent(event.target.value)"
      @click:clear="(event) => clearSearchString()"
      class="shrink"
      label="Search ingredients.."
      variant="solo"
      clearable
    />
    <span v-for="i in allIngredientNames" v-bind:key="i[0]">
      <ingredientSearchPresenter
        :ingredientName="i[1]"
      />
    </span>
  </div>
</template>

<script>
import ingredientSearchPresenter from "../presenters/ingredientSearchPresenter.vue";
export default {
  emits: ["closeClicked"],
  components: {
    ingredientSearchPresenter,
  },
  props: {
    allIngredientNames: { required: true },
    filterIngredientEvent: { required: true },
  },
  methods: {
    updateSearchStringACB(value) {
      this.filterIngredientEvent(value);
    },
    clearSearchString() {
      this.filterIngredientEvent("");
    },
  },
};
</script>
<style scoped>
.ingredientPopUp {
  position: absolute;
  top: 15px;
  background-color: white;
  z-index: 1200;
  display: block;
  margin: 30px;
  padding: 10px;
  left: 0px;
  border: 1px black;
  box-shadow: 1px 1px 20px;
  border-radius: 8px;
  min-width: 90%;
}
.blocker {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1199;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
</style>
>
