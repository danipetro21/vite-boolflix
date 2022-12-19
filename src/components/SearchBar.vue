<script>

//importo lo store contente il link per il DB
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        resetSearch() {
            this.$emit('search');
        }
    }
}

</script>


<template>

    <div class="form">

        <input type="text" class="searchClass search-bar" id="search-character" v-model="store.searchText"
            placeholder="Search by NAME">

        <button type="submit" class="btn src" @click.prevent="$emit('search')">
            SEARCH
        </button>
        <button type="submit" class="btn rst" @click.prevent="resetSearch()">RESET</button>
    </div>
</template>


<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.form {
    width: 100%;
    text-align: left;
}

.searchClass{
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
}

.src {
    background-color: rgb(26, 155, 26);
}

.rst {
    background-color: rgb(207, 31, 31);
}
</style>