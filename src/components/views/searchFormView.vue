<template>
  <v-main>
    <v-form>
      <v-text-field @input="changeQuery"  label="Search" @keydown.enter.prevent="validate" ></v-text-field>
      <v-btn @click="validate" >
        Search
      </v-btn>

    </v-form>
  </v-main>
</template>

<script>

export default {
  setup() {

  },
  methods: {
    validate() {
      this.$emit('doSearch');
    },
    changeQuery(event) {
      this.$emit('updateQuery', event.target.value);
    }
  }
}
</script>
