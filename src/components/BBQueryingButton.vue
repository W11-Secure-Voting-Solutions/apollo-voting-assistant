<template>
    <button @click="queryBB">Query Bulletin Board</button>
</template>

<script>
import { get }  from '../services/httpService.js';

export default {
    methods: {
        async queryBB() {
            const URL = "https://reqres.in/api/users/2"; // TODO: move to state
            const response = await get(URL);
            // TODO: add to the state and display it
        }
    }
}
</script>

<style scoped>

</style>