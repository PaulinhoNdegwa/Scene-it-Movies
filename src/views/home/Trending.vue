<template>
  <div class="home">
    <h3 class="section-headers">Trending Movies</h3>
    <MoviesContainer v-if="movies.length > 0" :movies="movies" />
    <Loader v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import MoviesContainer from "../../components/MoviesContainer.vue";
import Loader from "../../components/Loader.vue";
export default {
  name: "Trending",
  components: {
    MoviesContainer,
    Loader
  },
  data() {
    return {
      trending_url:
        "https://api.themoviedb.org/3/trending/movie/week?api_key=d4c38aaf3b6b6bf2e1f7a5418a14e582",
      loading: false,
      movies: [],
      error: null,
    };
  },
  // components: {},
  created() {
    this.getMovies(this.trending_url);
  },
  methods: {
    getMovies(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.results.slice(0, 10);
          console.log(this.movies);
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