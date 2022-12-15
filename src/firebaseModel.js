import {onValue, ref, set } from "firebase/database";

function updateFirebaseFromModel(database, store) {
    
    const favs = store.favourites
    console.log("favs", favs)
    console.log(ref(database, '/' + store.currentUser ))
    //database.ref("/uid/store/").set(store);
    if (store.favourites){
        console.log("is sending model to firebase")
        set(ref(database, '/' + store.currentUser ), {
            favourites: store.favourites,
            username: store.username,
            underTwenty: store.underTwenty,
            ingredients: store.ingredients
          });

    } else {
        console.log("Skipped sending model to firebase")
    }
    
    return;
}



function updateModelFromFirebase(database, store) {
    console.log("should fetch model from firebase")
    console.log(store)
    //get(ref(database, '/' + store.currentUser ), {
    //    favourites: store.favourites,
    //    username: store.username,
    //    underTwenty: store.underTwenty,
    //    ingredients: store.ingredients
    //  });
    //console.log(database.getReference('/' + store.currentUser));
    const starCountRef = ref(database, '/' + store.currentUser);
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data)
    {    if (data.username) {
            store.username = data.username
            store.underTwenty = data.underTwenty
            if (data.favourites){
                store.favourites = data.favourites
            }
            if (data.ingredients){
                store.ingredients = data.ingredients
            }
        }}
    console.log("data is", data)
    
    });
    return;
}


export {updateFirebaseFromModel, updateModelFromFirebase};