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
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

function searchDrinkFirstLetter(id){
   const complete_url = BASE_URL + "search.php?f=" + id 
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

function getIngredientList(){
   const complete_url = BASE_URL + "list.php?i=list"
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

function getCategorieList(){
   const complete_url = BASE_URL + "list.php?c=list"
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

function getGlassesList(){
   const complete_url = BASE_URL + "list.php?g=list"
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

function getAlcoolicFilterList(){
   const complete_url = BASE_URL + "list.php?a=list"
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

export {getDrinkDetails, searchDrinkByName, searchDrinkFirstLetter, getIngredientList, getCategorieList, getGlassesList, getAlcoolicFilterList};
/* eslint-disable */