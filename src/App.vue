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
}
</script>

<template>
  <AppHeader/>

  <main>

  </main>


</template>

<style scoped>

</style>
