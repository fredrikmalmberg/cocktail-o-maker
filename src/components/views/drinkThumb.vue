<script>


export default {
   props: {
    favourite: {required: true },
    drinkClickedEvent: {required: true }
},
   
   methods: {
        imgUrl (option) {
            if (option['value']){
                return option['value'].drinks[0].strDrinkThumb;
            }
        },
        nameString (option) {
            if (option['value']){
                return option['value'].drinks[0].strDrink;
            }
            else{
                return "Loading..";
            }
            
        },
        drinkClickedACB(option){
            //console.log(option['value'].drinks[0].idDrink);
            this.$props.drinkClickedEvent(option['value'].drinks[0].idDrink);
        }
    }
}

</script>



<template>
    <div class="searchResult">
        <v-card
            elevation="2" @click= "drinkClickedACB(favourite)">
                <v-img
                height="100"
                v-bind:src=imgUrl(favourite)
                ></v-img>
                <v-card-title>{{nameString(favourite)}}</v-card-title>
                <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                ></v-rating>
        </v-card>
    </div>
</template>


<style scoped>
.searchResult {
    text-align: center;
    display: inline-block;
    width: 200px;
    vertical-align: text-top;
    margin-inline: 40px;
    overflow:auto;
}
</style>
