<template>
    <div v-if="resultPromiseState.data">
    <drinkThumb :drinkID="resultPromiseState.data.drinks[0].idDrink" :imgUrl="resultPromiseState.data.drinks[0].strDrinkThumb" :name="resultPromiseState.data.drinks[0].strDrink" :drinkClickedEvent="drinkClickedACB" :isFavourite="true" :removeDrinkEvent="removeDrinkACB"/>
    {{favourite}}
    </div>
</template>

<script>
/* eslint-disable */
import drinkThumb from '../views/drinkThumb.vue'
import {useUserStore} from '../../stores/UserStore';
import { computed } from "vue";
import {resolvePromise2} from '../../resolvePromise'
import {getDrinkDetails2} from '../../cocktailDBIntegration';

export default {
  components: {
    drinkThumb,
  },
  props: {
    favourite: {required: true}
  },
  mounted() {
    console.log("fav is", this.favourite);
    resolvePromise2(getDrinkDetails2(this.favourite), this.resultPromiseState);
  },
  data: () => ({
    resultPromiseState : {},
  }),
  setup(props) {
    const userStore = useUserStore();

    //const fav = props.favourite;
    //const nameString = {};
    

    //resolvePromise(fav, this.resultPromiseState);
    //const { favourites } = storeToRefs(userStore).map(getDrinkDetails).map(extractValues);
    //const { removeFavourite } = useStore;
    //extractValues(this.favourite);
    
    return {
        //nameString,
        //imgUrl,
        userStore, 
        removeDrinkACB: computed(() => userStore.removeFavourite)
      };
  },
  methods: {
    drinkClickedACB(id) {
      this.$router.push({
        name: 'drinkDetails',
        params: {id: id},
      })
    },
    //removeDrinkACB(id){
      //this.userStore.removeFavourite(id);
    //}
  },

}
</script>



