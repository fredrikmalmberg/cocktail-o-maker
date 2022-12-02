/* eslint-disable */
import {BASE_URL} from './apiConfig.js'
import { useFetch } from '@vueuse/core'

function searchDrinkByName(text){
   const complete_url = BASE_URL + "search.php?s=" + text;
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

function getDrinkDetails(id){
   const complete_url = BASE_URL + "lookup.php?i=" + id 
   const { isFetching, error, data } = useFetch(complete_url).get().json();;
   return { isFetching, error, data };
}


export {getDrinkDetails, searchDrinkByName};
/* eslint-disable */