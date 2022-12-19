<template>
  fees
  {{this.drinkData}}
  {{this.ingredientList}}
<drinkThumbPresenter :favourite="this.drinkData.drinks"
</template>

<script>
import drinkThumbPresenter from '../presenters/drinkThumbPresenter.vue';
export default {
  props: {
    drinkData: { required: true },
    ingredientList: { required: true },
  },
  components: {
    drinkThumbPresenter
  }

 

}
</script>
