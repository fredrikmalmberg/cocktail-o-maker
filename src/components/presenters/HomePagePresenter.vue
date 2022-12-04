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
        ><router-link to="/search">Yes</router-link>
        </v-btn>
                
        <v-btn
          :loading="loading"
          class="ma-1"
          color="error"
          plain
          @click="remove"
        ><router-link to="/">No</router-link>
        </v-btn>
      </v-sheet>
    </div>
</template>

<script>
  import {useUserStore} from '../../stores/UserStore'

  export default {
    setup () {
      const userStore = useUserStore();
      return { userStore };
    },
    data: () => ({     
    }),
  }
</script>

<style scoped>
div{
 padding-top: 50px;
 
  }
</style>