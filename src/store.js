import { reactive } from "vue";

export const store = reactive ({
    titolo: "B00lFLIX",
    apiURL: "https://api.themoviedb.org/3/search/",
    API_KEY: "api_key=5fb151ec5f087137c82ac65caf760170",  
    movie: "movie",
    searchQuery : '',
})