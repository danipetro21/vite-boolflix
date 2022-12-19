
<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store.js'


export default{
  
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  },
 mounted(){
  console.log(store.API_KEY);
 }
}
</script>

<template>
  <AppHeader />

  <main>

  </main>


</template>

<style lang="scss">
@use './style/general.scss';
</style>

