<<<<<<< Updated upstream
<!-- This file contains the HomePage. Currently contains two buttons.-->


<template>
  <div class="text-center">
    <v-sheet
        class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
        color="light-grey darken-3"
        dark
    >
      <div class="grey--text text--lighten-1 text-body-2 mb-4">
        To continue to our page with cocktails, are you over 20 years old?
      </div>

      <v-btn
          :disabled="loading"
          class="ma-1"
          color="grey"
          plain
          @click="userStore.confirmedUnderTwenty()"
      >
        <router-link to="/research">Yes</router-link>
      </v-btn>

      <v-btn
          :loading="loading"
          class="ma-1"
          color="error"
          plain
          @click="remove"
      >
        <router-link to="/">No</router-link>
      </v-btn>
    </v-sheet>
=======
<template>
  <div>
    <h1>Login</h1>
    <FacebookLogin
    :app-id="facebookAppId"
    :auto-load="true"  
    @success="onFacebookLoginSuccess"
>
  <v-button type="submit">
    <router-link to="/research"> Login with Facebook</router-link>
  </v-button>
</FacebookLogin>
    <p v-if="error" class="error">{{ error }}</p>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import {useUserStore} from '../../stores/UserStore'

export default {
  setup() {
    const userStore = useUserStore();
    return {userStore};
  },
  data: () => ({}),
}
</script>

<style scoped>
div {
  padding-top: 50px;

}
</style>
=======
import FacebookLogin from 'facebook-login-vuejs';

import axios from 'axios';

export default {
  components: {
    FacebookLogin,
  },
  data() {
    return {
      facebookAppId: '549326463701323',
      error: '',
    };
  },
  methods: {
    onFacebookLoginSuccess(response) {
      axios.post('/api/login', {
      facebookId: response.userID,
      accessToken: response.accessTokens
      });
  },
},
};

</script>
>>>>>>> Stashed changes
