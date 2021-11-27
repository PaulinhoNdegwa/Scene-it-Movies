<template>
  <div class="home">
    <h3 class="section-headers">Top Rated Movies</h3>
    <MoviesContainer v-if="movies.length > 0" :movies="movies" />
    <Loader v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import MoviesContainer from "../../components/MoviesContainer.vue";
import Loader from "../../components/Loader.vue";

export default {
  name: "Home",
  components: {
    MoviesContainer,
    Loader
  },
  data() {
    return {
    toprated_url:
        "https://api.themoviedb.org/3/movie/top_rated?api_key=d4c38aaf3b6b6bf2e1f7a5418a14e582&language=en-US&page=1",
      loading: false,
      movies: [],
      error: null,
    };
  },
  // components: {},
  mounted() {
    this.getMovies(this.toprated_url);
  },
  methods: {
    getMovies(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.results.slice(0,10);
          console.log(this.movies)
          this.loading = false;
        })
        .catch((err) => {
          this.error = err;
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>