import {defineStore} from "pinia";
import {resolvePromise} from "../resolvePromise"
import {getIngredientList, getCategorieList, getGlassesList, getAlcoolicFilterList} from '../cocktailDBIntegration.js';
// OBS: Right now with an example of how it can look


// defineStore will return a function
// in state we define all properties
// getters are functions that give us the info we want, in the way we want


export const useDrinkStore = defineStore("drinkStore", {
    state: () => ({
        currentCocktail:null,
        drinks: [],
        ingredientsPromiseState:{} ,
        glassesPromiseState: {},
        alcoolFiltersPromiseState: {},
        categoriesPromiseState:{}
    }),
    actions:{
        getIngredients(){
            resolvePromise(getIngredientList(),this.ingredientsPromiseState);
        },
        getGlassesList(){
            resolvePromise(getGlassesList(),this.glassesPromiseState);
        },
        getAlcoolFilterList(){
            resolvePromise(getAlcoolicFilterList(),this.alcoolFiltersPromiseState);
        },
        getCategoriesList(){
            resolvePromise(getCategorieList(),this.categoriesPromiseState);
        }
    },
    getters: {
        favorites() {
            return this.drinks.filter(d => d.isFav)
        },
        arrayIngredients(){
            function keepNameCB(ingredient){
                return ingredient.strIngredient1;
            }
            return this.ingredientsPromiseState.post.drinks.map(keepNameCB);
        },
        arrayGlasses(){
            function keepNameCB(glasse){
                return glasse.strGlass;
            }
            return this.glassesPromiseState.post.drinks.map(keepNameCB);
        },
        arrayAlcoolFilter(){
            function keepNameCB(alcoolFilter){
                return alcoolFilter.strAlcoholic;
            }
            return this.alcoolFiltersPromiseState.post.drinks.map(keepNameCB);
        },
        arrayCategories(){
            function keepNameCB(categorie){
                return categorie.strCategory;
            }
            return this.categoriesPromiseState.post.drinks.map(keepNameCB);
        },
    }

})