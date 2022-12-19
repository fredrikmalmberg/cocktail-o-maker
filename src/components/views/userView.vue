<script>
export default {
  props: ["userName"],
}
</script>

<template>
  <v-row class="userSection"> 
  <h1>User Home</h1>
  <p class="userName">Username: {{ userName }}</p>
  </v-row>
</template>


<style scoped>
.userName {
  font-weight: bold;
}
.userSection{
  background-color: white;

  border-radius: 5px;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  display: block;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
}
</style>
