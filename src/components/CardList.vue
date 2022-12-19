<script>
import { store } from '../store.js'
import Card from './Card.vue';

export default {
    name: "CharacterList",
    components: {
        Card
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>

    <div class="container">
        

        <div class="box_card">

            <Card v-for="(movie, index) in store.movieList" :result="movie"/>


        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.container {
    margin: 0 auto;
    position: relative;
    top: 150px;
    max-width: 1500px;

}

.box_card {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

</style>