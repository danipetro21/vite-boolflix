
<script>
import NavBar from './components/NavBar.vue';
import CardList from './components/CardList.vue';
import { store } from './store.js';
import AppLoader from './components/AppLoader.vue';
import axios from 'axios';


export default {

  components: {
    CardList,
    NavBar,
    AppLoader
  },
  data() {
    return {
      store,
      loading: false,
    }
  },
  methods: {
    getApi() {
      let top_rated = `${store.apiURL}${store.movie}/${store.topRated}?${store.API_KEY}`;
      let upcoming = `${store.apiURL}${store.movie}/${store.upcoming}?${store.API_KEY}`;
      let now = `${store.apiURL}${store.movie}/${store.now}?${store.API_KEY}`;

      let myQuery = `${store.apiURL}${store.search}/${store.movie}?${store.API_KEY}&query=${store.searchQuery}`;


      const requestOne = axios.get(top_rated);
      const requestTwo = axios.get(upcoming);
      const requestThree = axios.get(now);
      const query = axios.get(myQuery);


      this.loading = true;
      axios
        .all([requestOne, requestTwo, requestThree, query])
        .then(axios.spread((...res) => {
          store.movieTopList = res[0].data.results;
          store.movieUpCoList = res[1].data.results;
          store.movieLatest = res[2].data.results;
          store.queryResuls = res[3].data.results;
          // use/access the results 
        })).catch(errors => {
          console.log("errori", errors);
        }).finally(() => {
          this.loading = false;
        });

    }

  },
  mounted() {

    this.getApi();

  }
}

</script>

<template>
  <AppLoader v-if="loading" />

  <NavBar @search="getApi" />

  <main>

    <CardList />

  </main>


</template>

<style lang="scss">
@use './style/general.scss';
</style>

