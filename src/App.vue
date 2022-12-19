
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
      let top_rated = `${store.apiURL}${store.movie}/${store.topRated}?${store.API_KEY}`;
      let upcoming = `${store.apiURL}${store.movie}/${store.upcoming}?${store.API_KEY}`;
      let now = `${store.apiURL}${store.movie}/${store.now}?${store.API_KEY}`;
      // let myUrl = store.apiURL;
      // myUrl += `/${store.movie}?${store.API_KEY}&query=ritorno+al+futuro`;

      const requestOne = axios.get(top_rated);
      const requestTwo = axios.get(upcoming);
      const requestThree = axios.get(now);

      axios
        .all([requestOne, requestTwo, requestThree])
        .then(axios.spread((...res) => {
          store.movieTopList = res[0].data.results;
          store.movieUpCoList = res[1].data.results;
          store.movieLatest = res[2].data.results;
        // use/access the results 
      })).catch(errors => {
        console.log("errori", errors);
      })
      
      // axios
      //   .get(top_rated)
      //   .then(res => {
      //     store.movieTopList = res.data.results;
      //     console.log(store.movieList);
      //   })
      //   .catch(err => {
      //     console.log("errori", err);
      //   })
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

