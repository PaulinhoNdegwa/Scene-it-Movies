<template>
  <div class="home">
    <h3 class="section-headers">Upcoming Movies</h3>
    <MoviesContainer v-if="movies.length > 0" :movies="movies" :horizontal="true" />
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
      upcoming_url:
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}&language=en-US&page=1`,
      loading: false,
      movies: [],
      error: null,
    };
  },
  // components: {},
  mounted() {
    this.getMovies(this.upcoming_url);
  },
  methods: {
    getMovies(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.results.slice(0, 20);
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