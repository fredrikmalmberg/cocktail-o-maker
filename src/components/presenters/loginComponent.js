import {
    getAuth,
    signInWithEmailAndPassword,
    //createUserWithEmailAndPassword,
    //updateProfile,
    //onAuthStateChanged,
    //signOut,
  } from 'firebase/auth'
  //import { ref, set } from "firebase/database";
  import {useUserStore} from '@/stores/UserStore';
  
  export default {
    data() {
      return {
        emailModel: '',
        passwordModel: '',
        displayNameModel: '',
        userStore: useUserStore()
      }
    },
    methods: {
      loginClicked() {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, this.emailModel, this.passwordModel)
            .then(response => {
              /* eslint-disable */
              console.log(response)
              //this.userStore.setCurrentUser(response);
              this.$router.push({name: 'userHome'});
            }).catch(error => {
          console.log(error)
        })
      },
  
    }
  }