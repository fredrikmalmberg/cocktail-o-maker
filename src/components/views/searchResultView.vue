<template>
    <v-main>

        <div v-if="searchResult">
            <div v-if="searchResult.error">
                {{searchResult.error}}
            </div>
            <div v-if="searchResult.post">
                <div>
                    <div class="searchResult" v-for="element in searchResult.post.drinks" :key="element.idDrink">
                        <v-card
                        elevation="2">
                            <v-img
                            height="250"
                            v-bind:src="element.strDrinkThumb"
                            ></v-img>
                            <v-card-title>{{element.strDrink}}</v-card-title>
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
                </div>        
            </div>
        </div>
    </v-main>
</template>

<script>

export default{
    setup() {
    },
    props:['searchResult'],
   data: () => ({
    }),

}
</script>

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