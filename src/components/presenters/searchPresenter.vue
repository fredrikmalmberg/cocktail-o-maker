<template>
    <v-main>
        <searchFormView @doSearch="fetchSearch" @updateQuery="newQuery"/>
        <div class="gridSearch">
          <searchSidebarView :drinks="drinkStore"/>
          <searchResultsView :searchResult="resultPromiseState"/>
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
        searchSidebarView
    },
    mounted(){
      resolvePromise(searchDrinkByName(this.query), this.resultPromiseState);
    },
    data: () => ({  
        resultPromiseState:{},
        query:"",
        filters: {}
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
        this.query = value;
      }
    },

  }
</script>

<style scoped>
.gridSearch{
        display:flex;
        flex-direction:row; 
        height: 100%;
        min-height: auto;
}
</style>