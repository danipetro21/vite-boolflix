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

    <div class="container" :class="store.visibility === true ? 'none' : 'active'">

        <h1>LATEST FILM</h1>
        <div class="box_card latest">

            <Card v-for="(movie, index) in store.movieLatest.slice(0, 5)" :result="movie" />

        </div>

        <h1>TOP RATED FILM</h1>
        <div class="box_card top_rated">

            <Card v-for="(movie, index) in store.movieTopList.slice(0, 5)" :result="movie" />

        </div>

        <h1>UPCOMING FILM</h1>
        <div class="box_card upcoming">

            <Card v-for="(movie, index) in store.movieUpCoList.slice(0, 5)" :result="movie" />

        </div>
    </div>


    <div class="ricerca" :class="store.visibility === true ? 'active' : 'none'"> 

        <h1>RISULTATI RICERCA: {{ store.queryResuls.length }}</h1>
        <div class="box_card">

            <h1 class="noResult" v-if="store.queryResuls.length == 0">SPIACENTI LA TUA RICERCA NON HA PRODOTTO RISULTATI</h1>

            <Card v-for="(movie, index) in store.queryResuls" :result="movie" />
           
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
    display: block;
}

.box_card {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.noResult{
    width: 500px;
    font-size: 3rem;
    background-color: transparent;
    margin: 100px auto;

}

h1 {
    background-color: $netflix_Red;
    width: 200px;
    text-align: center;
    padding: 10px;
    color: white;

    margin-left: 10px;
}

.ricerca {
    max-width: 1400px;
    margin: 0 auto;
    position: absolute;
    top: 200px;
    right: 0;
    left: 0;
}

.active {
    display: block;
}

.none {
    display: none;
}
</style>