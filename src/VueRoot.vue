<template>
    <App></App>
</template>


<script>

import App from "./App.vue";
import { updateFirebaseFromModel, updateModelFromFirebase } from "./firebaseModel";
import { useUserStore } from "./stores/UserStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from './plugins/firebase';
import { getDatabase} from "firebase/database";
//import HomePage from './components/HomePage.vue'
export default {
  name: 'VueRoot',
  components: {
    App,
  },
  setup() {
    const store = useUserStore();
    return {store};
  },
  mounted() {
    const auth = getAuth();
    const database = getDatabase(app);
    var storeUnWatcher = null;
    // The case when reloading but still logged in..globalThis
    console.log("auth is", auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.store.loggedin = true
        this.store.currentUser = user.uid
        console.log("User logged in or is logged in")
        updateModelFromFirebase(database, this.store)
        storeUnWatcher = this.$watch(
          () => this.store,
          () => updateFirebaseFromModel(database, this.store),
        )
      } else {
        if (storeUnWatcher) 
        {
            storeUnWatcher();
            console.log("Store is no longer watched")
        }
        this.store.$reset()
        this.store.loggedin = false
        this.store.currentUser = ""
        console.log("User logged out")
      }
    })
  },
}
</script>