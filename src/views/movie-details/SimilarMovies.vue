<template>
  <h3>Similar Movies</h3>
  <MoviesContainer v-if="!loading && movies.length" :movies="movies" />
  <Loader v-else />
</template>

<script>
import MoviesContainer from "../../components/MoviesContainer.vue";
import Loader from '../../components/Loader.vue';

export default {
  name: "Similar Movies",
  components: {
    MoviesContainer,
    Loader
  },
  props: ["movie_id"],
  data() {
    return {
      similar_movies_url: `https://api.themoviedb.org/3/movie/${this.movie_id}/similar?api_key=d4c38aaf3b6b6bf2e1f7a5418a14e582&language=en-US&page=1`,
      movies: [],
      loading: false,
      error: null
    };
  },
  mounted() {
    this.getMovies(this.similar_movies_url);
  },
  methods: {
    getMovies(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.results.slice(0, 10);
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