<script>
import { store } from '../store.js';
export default {
    props: ["result"],
    data() {
        return {
            store,
            backdrop : 'http://image.tmdb.org/t/p/original/'
        }
    },
}

</script>

<template>

    <div class="card">
        <img :src="backdrop + result.poster_path" alt="c">
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    width: calc(100% / 5 - 20px);
    margin: 10px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
    }

}
</style>