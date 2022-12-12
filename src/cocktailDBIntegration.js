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

// Test with regular fetch
const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Host': BASE_URL
   }
};

function treatHTTPResponseACB(response){ 
   if(!response.ok) throw new Error("API problem "+response.status);  // or response.status!==200 
   console.log(response);
   return response.json();
}

 function getDrinkDetails2(id){
   const complete_url = BASE_URL + "lookup.php?i=" + id 
   return fetch(complete_url).then(treatHTTPResponseACB)
}


export {getDrinkDetails, getDrinkDetails2, getIngredientDetails, searchDrinkByName, searchDrinkFirstLetter, getIngredientList, getCategorieList, getGlassesList, getAlcoolicFilterList};
/* eslint-disable */