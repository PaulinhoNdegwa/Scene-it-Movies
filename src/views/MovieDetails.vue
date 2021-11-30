<template>
  <h3>Movie Details</h3>
  <MovieDetailsSection v-if="!loading && movie" :movie="movie" />
  <Loader v-else />
  <SimilarMovies v-if="movie" :movie_id="id" />
  <hr v-if="movie" />
</template>

<script>
import MovieDetailsSection from "./movie-details/MovieDetailsSection.vue";
import SimilarMovies from "./movie-details/SimilarMovies.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "MovieDetails",
  components: {
    MovieDetailsSection,
    SimilarMovies,
    Loader,
  },
  props: ["id"],
  data() {
    return {
      movie_url: `https://api.themoviedb.org/3/movie/${this.id}?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}`,
      movie: null,
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.getMovie(this.movie_url);
  },
  methods: {
    getMovie(url) {
      this.loading = true;
      this.error = null;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data.success) {
            this.error = "Movie not found";
          }
          this.movie = data;
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