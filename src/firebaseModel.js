import { onValue, ref, set } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function signIn(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

function updateFirebaseFromModel(database, store, uid) {
  //console.log("Running updateFirebaseFromModel");
  if (store.currentUser !== "") {
    //console.log("is sending model to firebase for user", uid);

    set(ref(database, "users/" + uid), {
      favourites: store.favourites,
      username: store.username,
      underTwenty: store.underTwenty,
      ingredients: store.ingredients,
    });
  } else {
    //console.log("Skipped sending model to firebase");
  }

  return;
}

function updateModelFromFirebase(database, store) {
  //console.log( "Running updateModelFromFirebase with path /" + store.currentUser );
  if (store.currentUser !== "") {
    const starCountRef = ref(database, "users/" + store.currentUser);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        store.username = data.username;
        store.underTwenty = data.underTwenty;
        if (data.favourites) {
          store.favourites = data.favourites;
        } else {
          store.favourites = [];
        }
        if (data.ingredients) {
          store.ingredients = data.ingredients;
        } else {
          store.ingredients = [];
        }
      }

      //console.log("data is", data)
    });
  }
  return;
}

export { updateFirebaseFromModel, updateModelFromFirebase, signIn };
