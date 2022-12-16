/* eslint-disable */
import { createApp } from "vue";
//import App from "./App.vue";
import VueRoot from "./VueRoot.vue"
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
//import {database} from './plugins/firebase';
import {app} from './plugins/firebase';
//import { useUserStore } from "./stores/UserStore";
import { getDatabase} from "firebase/database";
//import { updateFirebaseFromModel, updateModelFromFirebase } from "./firebaseModel";
const database = getDatabase(app);
loadFonts();



import router from "./router";

const pinia = createPinia();
//window.db = database;

createApp(VueRoot).use(pinia).use(router).use(vuetify).mount("#app");
/*const store = useUserStore();
console.log(store.currentUser)
window.uid = null
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
var storeUnWatcher = null

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.loggedin = true
    store.currentUser = user.uid
    console.log("in main user logged in")
    updateModelFromFirebase(database, store)
    storeUnWatcher = store.$watch(
      () => updateFirebaseFromModel(database, store),
    )
  } else {
    if (storeUnWatcher) storeUnWatcher();
    store.$reset()
    store.loggedin = false
    store.currentUser = ""
    console.log("in main user logged out")
  }
});

//this.countUnwatch = this.$watch(
//  () => this.count,
//  () => {
//console.log("Count changed")
// this passes the entire store to the function, so you can access
// it’s state or actions

// setCountInFirebase(useCounterStore())

//}
//);




//for the cases where we reload
//updateModelFromFirebase(database, store)


/*
store.$subscribe((mutation, state) => {
    console.log("state", state)
    console.log("mutation", mutation)
    if (mutation.events){
      if (mutation.events.key === 'currentUser') {
        console.log('should update pinia', mutation)
        updateModelFromFirebase(database, store)
      }
      else{
          console.log('should update firebase')
          updateFirebaseFromModel(database, store)
          
      }
    }
    else{
      console.log('weird mutation event..')
    }
    
    //if (mutation.type === false) {console.log('you want to update in the model updateFirebaseFromModel(store)')};
});*/