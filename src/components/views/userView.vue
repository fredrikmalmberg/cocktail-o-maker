<script>
export default {
   props: ["userName"],
}
</script>

<template>
    <h1>User Home</h1>
  <p class="userName">Username: {{ userName }}</p>
</template>


<style scoped>
.userName {
  font-weight: bold;
}
</style>
