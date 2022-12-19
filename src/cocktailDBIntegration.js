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

function getIngredientDetails(id){
   const complete_url = BASE_URL + "lookup.php?iid=" + id 
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

async function searchByIngredient(name){
   const complete_url = BASE_URL + "filter.php?i=" + name
   const { isFetching, error, data } = await useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

function searchDrinkFirstLetter(id){
   const complete_url = BASE_URL + "search.php?f=" + id 
   const { isFetching, error, data } = useFetch(complete_url).get().json();
   return { isFetching, error, data };
}

async function getIngredientList(){
   const complete_url = BASE_URL + "list.php?i=list"
   const { isFetching, error, data } = await useFetch(complete_url).get().json();
   return { isFetching, error, data };

}



function searchIngredientByName(text){
   const complete_url = BASE_URL + "search.php?i=" + text;
   const { isLoading, isFetching, error, data } = useFetch(complete_url).get().json();
   return { isLoading, isFetching, error, data };
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

export {getDrinkDetails, getIngredientDetails, searchDrinkByName, searchByIngredient, searchIngredientByName, searchDrinkFirstLetter, getIngredientList, getCategorieList, getGlassesList, getAlcoolicFilterList};
/* eslint-disable */