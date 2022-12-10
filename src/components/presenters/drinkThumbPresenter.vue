<template>
    <div>
    <drinkThumb :imgUrl="imgUrl" :name="nameString" :drinkClickedEvent="drinkClickedACB" :isFavourite="true" :removeDrinkEvent="removeDrinkACB"/>
    </div>
</template>

<script>
/* eslint-disable */
import drinkThumb from '../views/drinkThumb.vue'
import {useUserStore} from '../../stores/UserStore';
import { computed } from "vue";


function extractValues(input) {
  if (input.data) {
    console.log(input.data)
  } 
}


export default {
  components: {
    drinkThumb,
  },
  props: {
    favourite: {required: true}
  },
  setup(props) {
    const userStore = useUserStore();
    const fav = props.favourite;
    const nameString = {};
    const imgUrl = {};
    //const { favourites } = storeToRefs(userStore).map(getDrinkDetails).map(extractValues);
    //const { removeFavourite } = useStore;
    //extractValues(this.favourite);
    return {
        nameString,
        imgUrl,
        fav,
        
        userStore, 
        removeDrinkACB: computed(() => userStore.removeFavourite)};
  },
  methods: {
    drinkClickedACB(id) {
      this.$router.push({
        name: 'drinkDetails',
        params: {id: id},
      })
    },
  },
  created() {
    this.$watch(
        //() => this.$route.params,
        () => this.fav,
        () => {
            if (this.fav){
                console.log(this.fav.drinks[0]);
                this.nameString = this.fav.drinks[0].strDrink;
                this.imgUrl = this.fav.drinks[0].strDrinkThumb; 
            }
          
        },
        {immediate: true}
    )
  },
}
</script>



