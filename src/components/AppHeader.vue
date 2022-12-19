<script>
import NavBar from './NavBar.vue';

export default{
    component: {
        NavBar
    },
    components: { NavBar }
}
</script>

<template>

    <div class="container">

        <NavBar />


    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';

.container{
    width: 100%;
    background-color: #0a0a0af4;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
}


</style>
