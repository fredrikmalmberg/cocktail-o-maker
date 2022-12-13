<template>
    <div v-if="!resultPromiseState.data">
      Loading...
    </div>
    <drinkThumb 
    v-else 
    :imgUrl="imgUrl()" 
    :name="nameStr()" 
    @drinkClicked="drinkClickedACB" 
    :isFavourite="isFavourite(favourite)" 
    @removeFavourite="removeDrinkACB"/>
</template>

<script>
import drinkThumb from '../views/drinkThumb.vue'
import {useUserStore} from '../../stores/UserStore';
import {getDrinkDetails} from '../../cocktailDBIntegration';
import { mapActions} from "pinia";

export default {
  components: {
    drinkThumb,
  },
  props: {
    favourite: {required: true}
  },
  mounted() {
    this.resultPromiseState = getDrinkDetails(this.favourite);
  },
  data() {
    return { 
      name : "",

      resultPromiseState: { data: null, error: null} };
  },
  methods: {
    ...mapActions(useUserStore, ["removeFavourite"]),
    ...mapActions(useUserStore, ["isFavourite"]),

    drinkClickedACB() {
      this.$router.push({
        name: 'drinkDetails',
        params: {id: this.favourite},
      })
    },
    removeDrinkACB(){
      let name = this.nameStr();
      console.log("should remove", name)
      if (confirm('Are you sure you want to remove ' + name + " from your favourites?")){
        this.removeFavourite(this.favourite)
      }
      
    },
    imgUrl(){
      return this.resultPromiseState.data.drinks[0].strDrinkThumb
    },
    nameStr(){
      return this.resultPromiseState.data.drinks[0].strDrink
    },
  },
}
</script>



