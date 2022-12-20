<script>

import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            this.$emit('search');
            store.visibility = true;
        },

        resetSearch() {
            store.searchQuery = null;
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
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <button type="submit" class="btn rst" @click.prevent="resetSearch()"><i
                        class="fa-solid fa-x"></i></button>

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
    flex-direction: row;
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

.form {
    position: relative;
    width: 1000px;
}


.searchClass {
    padding: 15px;
    border: none;
}

.search-bar {
    background-color: $bg_secondary;
    margin-left: 10px;
    border: 0.4px solid rgba(255, 255, 255, 0.324);
    width: 100%;
    padding: 15px;
    line-height: 1;
    box-sizing: border-box;
    outline: none;
    display: flex;
    justify-content: space-between;
}

.btn {
    position: absolute;
    top: 3px;
    bottom: 3px;
    border: 0;
    color: #fff;
    background-color: transparent;
    outline: none;
    margin: 0;
    padding: 0 10px;
    z-index: 2;
    cursor: pointer;
}

::placeholder {

    font-size: 1em;
    color: mintcream;
    margin-right: 20px;
}

.src {
    // background-color: rgb(26, 155, 26);
    right: 20px;
}

.rst {
    // background-color: rgb(207, 31, 31);
    right: 0;
}
</style>
