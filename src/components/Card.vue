<script>
import { store } from '../store.js';


export default {
    props: ["result"],
    data() {
        return {
            store,
            backdrop: 'http://image.tmdb.org/t/p/w342/'
        }
    },
    methods: {
        calcRated() {
            let star = 0;
            let average = this.result.vote_average;
            if (average > 0 && average < 4) {
                star = 1
            } else if (average > 3 && average < 6) {
                star = 2
            } else if (average > 5 && average < 8) {
                star = 3
            } else if (average > 7 && average < 9) {
                star = 4
            } else if (average > 8 && average < 11) {
                star = 5
            }

            return star;
        }
    }
}

</script>

<template>

    <div class="card">
        <!-- <img :src="backdrop + result.poster_path" alt="c"> -->
        <div class="poster">
            <img :src="result.poster_path != null ? backdrop + result.poster_path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU'"
                :alt="result.original_title">
        </div>


        <div class="info">
            <h3>{{ result.original_title }}</h3>
            <div class="stars">
                <ul>
                    <li v-for="star in calcRated() "> <i class="fa-solid fa-star"></i></li>
                </ul>
                <h1 class="average">{{ result.vote_average }}</h1>
            </div>

            <h4>{{ result.original_language }}</h4>
            <p>{{ result.overview }}</p>

        </div>

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
    position: relative;

    img {
        width: 100%;
    }

}

.info {
    width: 100%;
    position: absolute;
    top: 0;
    padding: 15px;
    line-height: 27px;
    display: none;
    color: white;
    overflow: scroll;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.307);

    h3 {
        font-size: 2.5rem;
        line-height: 35px;
        padding: 10px 0;
    }

    h4 {
        font-size: 1.5rem;
    }

    p {
        padding: 10px;
        font-size: 1.2rem;
    }

}

.stars {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
        display: flex;
        gap: 20px;
        list-style: none;
        margin-bottom: 15px;
    }
}


.card:hover img {
    display: none;
}

.card:hover .info {
    display: block;
}

.average{
    background-color: #f5c518;
    padding: 10px;
    border-radius: 5px;
    color: black;
    font-size: 1.6rem;
}

</style>