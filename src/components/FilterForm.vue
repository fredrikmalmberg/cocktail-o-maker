<template>
    <div class="filter-div">
        <v-form
        v-model="valid"
        >  
        <h2>Filter</h2>     
        <v-text-field 
          label="Search"
          v-model="search_string" @change="onChangeSearch"
          placeholder="Search for drink name..."
          ></v-text-field>
        <!-- INCLUDE TYPE SELECTION -->
        <h3>Spirit Type</h3>
        <div class="filter-div-child">
          <v-select class="selection"
          v-model="typevalueInclude" @change="onIncludeType"
          :items="typeitems"
          attach
          chips
          hide-details="true"
          label="Include types"
          multiple
          >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index < 2">
              <span>{{ item }}</span>
            </v-chip>
            <span
              v-if="index === 2"
              class="grey--text text-caption"
            >
              (+{{ typevalueInclude.length - 2 }} others)
            </span>
          </template>
          </v-select>

        </div></v-form></div>
  </template>
  
  <script>
  export default {
    data: () => ({     
    }),
  }
</script>
  
  <style>
    #color-legend{
      padding: 0;
      height: 100px;
      width: 100%;
    }
    
    .filter-div{
      width: 25vw;
      margin: 10px;
      border-radius: 25px;
      background: #ffffff;
      padding: 30px;
      font-size: 12px;
      display:flex;
      flex-direction: column;
      font-family: "Quicksand";
      height: fit-content;
    }
    .filter-div-child{
      border: 2px dashed rgb(241, 241, 241);
      margin: 10px 0px;
      padding:10px;
    }
    .v-form{
      width: 100%;
    }
  
    .filter-div p{
      color: rgb(71, 71, 71);
    }
  
    .selection{
      margin-bottom: 20px;
    }
    h2{
      color: #e05fb1;
      margin-bottom: 10px;
      text-align: center;
    }
    h3{
      color: #e69b46;
    }
  
  </style>
  