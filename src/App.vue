
<script>
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';
import { store } from './store.js';
import axios from 'axios';


export default {

  components: {
    AppHeader,
    CardList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      let myUrl = store.apiURL;
      myUrl += `/${store.movie}?${store.API_KEY}&query=ritorno+al+futuro`;
      
      axios
        .get(myUrl)
        .then(res => {
          store.movieList = res.data.results;
          console.log(store.movieList);
        })
        .catch(err => {
          console.log("errori", err);
        })
    }
  },
  mounted() {
    this.getApi();
    
  }
}
</script>

<template>
  <AppHeader />

  <main>

    <CardList />

  </main>


</template>

<style lang="scss">
@use './style/general.scss';
</style>

