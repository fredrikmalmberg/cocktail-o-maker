<template>
<div v-if="promiseState.error">{{promiseState.error}}</div>
<img v-if="!promiseState.data || promiseState.isFetching" class="mr-3" :src="require('/src/assets/loading.gif')" :height="heightOfSpinner"/>


</template>

<script>
export default {
    props: {
        promiseState: {required: true},
        heightOfSpinner: {default: '40', required: false},
    },
}
</script>

