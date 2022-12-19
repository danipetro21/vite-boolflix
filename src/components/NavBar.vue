<script>

import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        search(){
            this.$emit('search');
            store.visibility = true;
        },

        resetSearch() {
            store.visibility = false;

        }
    }
}
</script>

<template>
    <div class="container">
        <nav>

            <div class="logo">
                <img src="logo.png" alt="">
            </div>

            <div class="form">

                <input type="text" class="searchClass search-bar" id="search-character" v-model="store.searchQuery"
                    placeholder="Search by NAME">

                <button type="submit" class="btn src" @click.prevent="search()">
                    SEARCH
                </button>
                <button type="submit" class="btn rst" @click.prevent="resetSearch()">RESET</button>
            </div>

        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/variables' as *;

.container {
    width: 100%;
    background-color: #0a0a0af4;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
}

nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
    padding: 30px;

}

.logo {

    width: 200px;

    img {
        width: 100%;
    }
}



.searchClass {
    padding: 15px;
    border-radius: 15px;
    border: none;
}

.search-bar {
    background-color: $bg_secondary;
    margin-left: 10px;
}

.btn {
    margin: 0 10px;
    padding: 10px;
    border: transparent;
    border-radius: 10px;
    cursor: pointer;
}

.src {
    background-color: rgb(26, 155, 26);
}

.rst {
    background-color: rgb(207, 31, 31);
}
</style>
