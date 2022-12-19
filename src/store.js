// require('dotenv').config();
import { reactive } from "vue";


export const store = reactive ({
    titolo: "B00lFLIX",
    apiURL: "https://api.themoviedb.org/3/",
    API_KEY: "api_key=5fb151ec5f087137c82ac65caf760170",
    movie: "movie",
    movieTopList: [],
    movieLatest: [],
    movieUpCoList: [],
    seriesList: [],
    topRated: 'top_rated',
    searchQuery : '',
    search : 'search',
    now : 'now_playing',
    upcoming : 'upcoming'
})