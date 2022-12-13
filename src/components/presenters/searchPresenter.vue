<template>
    <v-main>
        <searchFormView @doSearch="fetchSearch" @updateQuery="newQuery"/>
        <div class="gridSearch">
          <searchSidebarView :drinks="drinkStore" @updatefilter="updateFilter"/>
          <searchResultsView :searchResult="resultPromiseState" @drinkClickedEvent="drinkClickedACB"/>
        </div>
    </v-main>
</template>

<script>
import {useUserStore} from '../../stores/UserStore'
import {useDrinkStore} from '../../stores/DrinkStore'
import searchResultsView from '../views/searchResultView.vue'
import searchFormView from '../views/searchFormView.vue'
import searchSidebarView from '../views/searchSidebarView.vue'
import {searchDrinkByName, searchDrinkFirstLetter} from '../../cocktailDBIntegration.js';
import {resolvePromise} from '../../resolvePromise'

  export default {
    components:{
        searchResultsView,
        searchFormView,
        searchSidebarView,
    },
    mounted(){
      resolvePromise(searchDrinkByName(this.query), this.resultPromiseState);
    },
    data: () => ({  
        resultPromiseState:{},
        ingredientFilterPromiseState:{},
        categoryFilterPromiseState:{},
        glasseFilterPromiseState:{},
        alcoolFilterPromiseState:{},
        query:"",
        filters: {
          glasses: "",
          ingredients: [],
          alcoolFilter: "",
          categories: ""
        }
    }),
    setup () {
      const userStore = useUserStore();
      const drinkStore = useDrinkStore();
      drinkStore.getIngredients();
      drinkStore.getGlassesList();
      drinkStore.getAlcoolFilterList();
      drinkStore.getCategoriesList();
      return { userStore, drinkStore };
    },
    methods:{
      fetchSearch() {
        resolvePromise(searchDrinkByName(this.query), this.resultPromiseState);
      },
      fetchSearchByLetter() {
        resolvePromise(searchDrinkFirstLetter(this.query), this.resultPromiseState);
      },
      newQuery(value){
        console.log(value);
        this.query = value;
      },
      updateFilter(type, value){
        this.filters[type] = value;

      },
      drinkClickedACB(option){
        console.log("clicked drink", option);
        this.$router.push({
          name: 'drinkDetails',
          params: { id: option },
        })
      }
    },
    drinkClickedACB(option) {
      console.log("clicked drink", option);
      this.$router.push({
        name: 'drinkDetails',
        params: {id: option},
      })
    }
  },

}
</script>

<style scoped>
.gridSearch {
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: auto;
}
</style>