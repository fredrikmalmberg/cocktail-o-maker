<!-- This file contains the TopBar-component of page. 
    This page currently has a button that is empty, TODO when navigation is added -->


    <template>
        <v-app-bar
          color=#ffffff
          dark
        >
        <a href="/">
        <img class="mr-3" :src="require('/src/assets/logo.png')" height="40" /></a>
            <v-spacer>
                <nav>
                    <router-link to="/">Home</router-link> |
                    <router-link to="/search">Search</router-link> 
                  </nav>


            </v-spacer>
            <v-btn>Test.btn.empty</v-btn>
        </v-app-bar>
    </template>
    
    <script>
      export default {
        data: () => ({     
        }),
      }
    </script>
    
    <style scoped>
    img{
        padding-top: 15px;
        margin-right: 100%;
      }
      </style>