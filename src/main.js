import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
//import {database} from './plugins/firebase';
import {app} from './plugins/firebase';
import { useUserStore } from "./stores/UserStore";
import { getDatabase} from "firebase/database";
import { updateFirebaseFromModel, updateModelFromFirebase } from "./firebaseModel";
const database = getDatabase(app);
loadFonts();



import router from "./router";
/* eslint-disable */
const pinia = createPinia();
//window.db = database;

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");
const store = useUserStore();
console.log(store.currentUser)
window.uid = null
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();


onAuthStateChanged(auth, (user) => {
  if (user) {
    store.loggedin = true
    store.currentUser = user.uid
    console.log("in main user logged in")
  } else {
    store.$reset()
    store.loggedin = false
    store.currentUser = ""
    console.log("in main user logged out")
  }
});

//for the cases where we reload
updateModelFromFirebase(database, store)

store.$subscribe((mutation, state) => {
    console.log(mutation.events.key)
    console.log(state)
    if (mutation.events.key === 'currentUser') {
        updateModelFromFirebase(database, store)
    }
    else{
        updateFirebaseFromModel(database, store)
        
    }
    //if (mutation.type === false) {console.log('you want to update in the model updateFirebaseFromModel(store)')};
});