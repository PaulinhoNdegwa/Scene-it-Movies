<template>
  <div class="home">
    <h3 class="section-headers">Trending Movies</h3>
    <MoviesContainer v-if="movies.length > 0" :movies="movies" :horizontal="true" />
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
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}`,
      loading: false,
      movies: [],
      error: null,
    };
  },
  // components: {},
  mounted() {
    this.getMovies(this.trending_url);
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