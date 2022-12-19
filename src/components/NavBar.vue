<script>
import SearchBar from './SearchBar.vue';
import App from '../App.vue';
export default{
    components: { 
        SearchBar,
    }
}
</script>

<template>

    <nav>

        <div class="logo">
            <img src="logo.png" alt="">
        </div>

        <div class="search-container">
            <SearchBar @search="getApi"/>
        </div>

    </nav>

</template>

<style lang="scss" scoped>

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
    padding: 30px;

}

.logo{

    width: 200px;

    img{
        width: 100%;
    }
}

</style>
